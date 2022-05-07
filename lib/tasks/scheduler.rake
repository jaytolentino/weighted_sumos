task :send_alerts => :environment do
  puts 'Sending alerts...'
  Roadmap::ChecklistDeadlines::AlertService.bulk_send_all!
  puts 'Done'
end