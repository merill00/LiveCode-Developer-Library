Commercial versions of LiveCode allow you to set the password property of a stack in order to encrypt the scripts. While this is a useful feature it can be troublesome to password protect your stacks during development. Levure allows you to develop your application using unencrypted stacks and gives you the option of encrypting some or all of your stacks when you build a distribution with the packager.

To encrypt stacks in your distribution builds, do the following:

1. In `app.yml` set the `encrypt stacks` entry to true.

   ```
   encrypt stacks: true
   ```

2. Create an `.env` file alongside the app.yml file with `PASSWORD=YOUR_PASSWORD_HERE` in it.

   If you are using Git, don't commit the `.env` file to your version control repository.

3. If you want to leave some stacks unencrypted in your builds, you can override the `encrypt stacks` setting for specific stacks. Here is an example in `app.yml`:

   ```
   libraries:
    - filename: my_unencrypted_library.livecodescript
      encrypt: false
    - folder: my_folder_of_unencrypted_libraries
      encrypt: false
   ```