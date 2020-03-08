# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new sample_app -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - The http verb we are sending to the server through the url.
library - The url itself.
:id - the parameter?? 
book - The name of the controller
show - The name of the method that we put in the controller 

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

rails generate migration migration_name



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

In the text editor, go into the file with class Person and inside of it type:


validates :shirt :pants :shoes presence: true