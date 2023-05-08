
## Updating Pages
To create new pages, add a new `.js` file to the `/pages` folder. Whichever name you chose for this file will be the path to the page.
Pages:
* /about
* /contact-us
* /faq
* /index _(homepage)_
* /our-team
* /publications
* /research
* /resources
* /wwrp

Next.js also includes these file in the `/pages` directory
* `_app.js` - used to start the application
* `_document.js` - used as a global document file. This is where we add global styles, global scripts, meta data, and load fonts. If you need to globally load scripts or styles in the future, it should be added here.

## Seo
Each page in the `/pages` directory includes a `<Head/>` component. Put any SEO date (titles, meta tags, canonicals, etc) within these tags. Each page is set up with boilerplates currently.

Example:
```js
<Head>
  <title></title>
  <meta name="title" content="">
  <meta name="description" content="">
</Head>
```

## Updating Components

### Team 
Add a new member to `/pages/team.js` using the `<TeamCard/>` component.
Props:
* `image`
* `title`
* `children` - wrap the content you would like to appear on the card within the opening & closing component tags.

Example:
```js
<TeamCard image="/team/jessica-r.jpg" title="Jessica R. Watrous, Ph.D.">
  <p>Here is some content about the team member.</p>
</TeamCard>
```

### FAQs
Add new FAQs to `/pages/faqs.js` using the `<FaqCard/>` component.
Props:
* `number`
* `question`
* `children` - wrap the content you would like to appear on the card within the opening & closing component tags.

Example: 
```js
                <FaqCard number="1" question="What do we use your information for?">
                    <p>
                        The VALOR Program is a team of researchers who contribute to
                        multiple research projects focused on active-duty service members
                        and veterans. For more information, please see{' '}
                        <Link href="/our-team">
                            <a title="Our Team">Our Team page.</a>
                        </Link>
                    </p>
                </FaqCard>
```

### Publications
Add new Publications, add to the `/components/Publications/publications-list.js` json file.
Publications posted to this list will be rendered on `/pages/publications.js`
Each card needs:
* title
* date
* link
* description

Example: 
```js
{
        title: 'Headline #5',
        date: 'Jan 1, 2021',
        link: 'https://www.woundedwarriorproject.org/',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
```
#### Note: The publications that show on the `/pages/index.js` (homepage) uses this same list. The only differenece is that the `<Publications/>` component receives a props called `max` that is set to `2`. 
Example: 
```js
<Publications max={2} />
```

## Styles
Global styles are stored in `/lib/styles.js`. 
Within each component and page there can also be `<style jsx></style>` tags. These styles are scoped specifically to that page/component and will not effect elements outside of that objects.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

"# valor-program" 
