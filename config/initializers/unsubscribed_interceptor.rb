class UnsubscribedInterceptor
  def self.delivering_email(mail)
    orig_emails = mail.to.is_a?(Array) ? mail.to : [mail.to]

    mail.to = orig_emails.reject { |e| User.find_by(email: e)&.unsubscribed? }
    mail.perform_deliveries = mail.to.present?
  end
end

ActionMailer::Base.register_interceptor(UnsubscribedInterceptor)