TaskMake a “To Do” SPA where users can enter their issues they haveto work on.

RequirementsApplication must have these pages
Home: 
    ●Path: “/”
    ●Content:○Visitors must see a call to action block, where you offer visitors to open an“Open issues” page.
      
Open Issues:
    ●Path: “/issues/open”
    ●Content:○Visitor sees form where you can add new issue to work on○Visitor can see only issues that are open (not done) and not “trashed”○Issues can be marked as done○Issues can be marked as “trash”○Issue descriptions are editable.
      
Done Issues:
    ●Path: “/issues/done”
    ●Content:○Visitor can see only issues that are done and not “trashed”○Issues can be marked as “not done”○Issues can be marked as “trash”○Issue descriptions are editable.
      
Trashed Issues:
    ●Path: “/issues/trashed”
    ●Content:○Visitor can see only issues that are “trashed”○Done issues can be marked as “not done”○Open issues can be marked as “done”○Issues can be restored (marked as “not trash”)○Issue descriptions are editable.
      
Application must have navbar:
Navbar must contain links to all pages of the application and current page link must behighlighted.


Application must use these technologies:
●Vue.js
●Vuex○State must persist after reload○Issues must be stored in single vuex state variable (e.g. state.issues)
●Vue router.

SuggestionsUse bootstrap-vue framework for ###layout styling.Bonus points

Bonus points are given for unit tests with Jest or Mocha.

What else has to be done?
All Repo has to be in GIT and link has to be 
provided for us to see (public link).
Send an email with the amount of hours this ###task took you to do.
