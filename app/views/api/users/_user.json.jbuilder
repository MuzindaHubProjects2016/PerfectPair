json.extract! user, :username, :age, :country,
                    :location, :orientation,
                    :gender
                    
json.default_photo_url user.default_photo_url
json.match_percentage user.match_percentage(current_user.username)
