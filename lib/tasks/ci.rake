desc 'Run Continuous Integration Build'

task :ci do
  begin
    original, ENV['COVERAGE'] = ENV['COVERAGE'], 'true'
    Rake::Task['spec'].execute
  ensure
    ENV['COVERAGE'] = original
  end
end
