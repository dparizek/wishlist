require 'spec_helper'

feature 'testing oauth' do
  scenario 'should create a new user' do
    login_with_oauth
    mock_auth_hash

    page.should have_content("Signed in as")
  end
end
