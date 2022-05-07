ActiveSupport::Notifications.subscribe 'process.action_mailer' do |name, started, finished, unique_id, data|
  EmailLog.create!(
    message_id: unique_id,
    mailer: data[:mailer],
    action: data[:action],
  )
end

ActiveSupport::Notifications.subscribe 'deliver.action_mailer' do |name, started, finished, unique_id, data|
  recipients = data[:to]

  # Only update logs if there are any recipients
  if recipients.present?
    log = EmailLog.find_or_create_by(message_id: unique_id)
    log.mailer = data[:mail] if log.mailer.blank?
    log.sent_at = finished
    log.recipient = recipients.shift
    log.save!

    if recipients.present?
      # Create a log for each recipient
      recipients.map do |recipient|
        next_log = log.dup
        next_log.recipient = recipient
        next_log.save!
      end
    end
  end
end