# Create Models

rails g model Talk title:string blurb:string description:text date:datetime limit:integer
rails g model Speaker user_id:integer talk_id:integer name:string blurb:string
rails g model User access_level:integer email:string login_type:integer
rails g model Ticket registra:string talk_id:integer
rails g model AccessLevel type:string

rails g migration add_duration_to_talks duration:int

rails g migration rename_access_type :access_levels, :type, :access_type

# Destroy models
rails destroy model Talk
rails destroy model Speaker