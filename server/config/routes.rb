Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'api/v1/auth/registrations',
    omniauth_callbacks: 'api/v1/auth/omniauth_callbacks'
  }
  resources :todos
end
