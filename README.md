## LEAP Dev NextJS Take Home Test

This is a very basic Book Store with static data and simple CRUD support.

Push this up to a public Github repository please. We will assess both code and commits in order to discern how you approach problem-solving.

Please do not use AI in any way, shape, or form.

---

Please implement the following:

1. Use a component library to make the UI and UX more appealing and user friendly.

Answer:I have chose shadcn/ui because it's fast to overwrite and build UI and very customizable and its based on Tailwind CSS

2. Implement dark mode that includes a switcher to go back to light mode.
I have used next-themes for the theme provider

3. Deleting a book displays a JavaScript alert. Replace this with modern UX.
I have replaced javascript with alert diglog using shadcn/ui 

4. Add a rating system that goes up to 5 stars.

5. There is a bug in the code. Find it and fix it.
I think the bug is this for update logic
where the old book is overwriting the updated book
{ ...updatedBook, ...book }
it should be in this order
{ ...book, ...updatedBook }

[Explain here what the bug was and how you fixed it]

Good luck and have fun!
