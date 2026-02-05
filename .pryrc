# frozen_string_literal: true

# See also ~/.pryrc for user-level console configuration
begin
  require_relative 'app/lib/console_helpers'
  include ConsoleHelpers if defined?(ConsoleHelpers)
rescue LoadError => e
  puts "ConsoleHelpers not loaded: #{e.message}"
end
