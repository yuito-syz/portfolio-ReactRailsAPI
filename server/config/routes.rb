Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations',
    omniauth_callbacks: 'auth/omniauth_callbacks'
  }
  resources :todos
end
