# frozen_string_literal: true

# Rails console convenience methods
module ConsoleHelpers
  def acme
    @acme ||= Company.find_by(subdomain: 'acme-test')
  end

  def ryan
    @ryan ||= User.find_by(first_name: 'Ryan', admin: true)
  end

  def ralph
    @ralph ||= User.find_by(first_name: 'Ralph', last_name: 'Watson')
  end
end
