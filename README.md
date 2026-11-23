# Welcome to my portfolio site

Hosted on heroku: https://ayla-portfolio.herokuapp.com/

![Alt text](https://res.cloudinary.com/dexkxkrfp/image/upload/v1638789364/personal-site/wireframes/Screen_Shot_2021-12-06_at_12.08.44_AM_ycqime.png)
![Alt text](https://res.cloudinary.com/dexkxkrfp/image/upload/v1638789374/personal-site/wireframes/Screen_Shot_2021-12-06_at_3.06.05_AM_uhkkil.png)
![Alt text](https://res.cloudinary.com/dexkxkrfp/image/upload/v1638789374/personal-site/wireframes/Screen_Shot_2021-12-06_at_3.06.28_AM_u3zakk.png)
![Alt text](https://res.cloudinary.com/dexkxkrfp/image/upload/v1638789364/personal-site/wireframes/Screen_Shot_2021-12-06_at_3.06.37_AM_n54tcv.png)

Find me on [LinkedIn](https://www.linkedin.com/in/aylabasha/)

## Contact and map verification

The map embeds San Diego at city level without a Maps JavaScript API key, with an external map link.

The contact form routes through FormSubmit to `aylabasha@gmail.com`. The endpoint is in `gatsby-config.js` under `siteMetadata.getform_url` (the existing field name is retained for compatibility). Submissions include name, email, subject, and message; Reply-To uses the visitor's email.

### One-time activation

After deploying, submit the form once. Open the FormSubmit activation email sent to `aylabasha@gmail.com` and confirm the address (check spam if needed). Submit another message after activation and verify inbox delivery. The direct email link remains available.

### Manual checks

- Check the map on desktop and mobile, including its external link.
- Check required fields and longer email suffixes such as `example.technology`.
- Submit while offline; confirm the error appears and entered text remains.
- Confirm the direct email link addresses `aylabasha@gmail.com`.
- After activation, submit a test and confirm inbox receipt and Reply-To.

An accepted HTTP response does not prove inbox delivery. No test message has been sent and a full Gatsby build has not been run.
