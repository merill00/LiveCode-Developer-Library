In general, to add a stack to a Levure application, put the stack file in the appropriate subfolder in your `app` folder and make sure there is a corresponding entry in `app.yml`.

For user interface (UI) binary stacks, libraries, behaviors, frontscripts and backscripts, place the stack file in the corresponding subfolder in your `app` folder and if necessary edit the corresponding section in `app.yml`.

You can learn more about adding these types of stacks here:

* [ui](ui)
* [libraries](libraries)
* [behaviors](behaviors)
* [frontscripts and backscripts](frontscripts-and-backscripts)

To add a stack that doesn't fit into the above categories, or a stack that needs to be bundled with non-stack files for its operation, use the `app/helpers` folder and the `helpers` section in `app.yml`.

* [Learn about helpers](helpers)
