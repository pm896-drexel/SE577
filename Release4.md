# Using OAuth To Make GitHub API Calls

* It is easy to integrate OAuth to make github API call, and i tried 2 ways to enable it via axios

````
await axios.get(
`https://api.github.com/users/${username}`,
{
headers: {
'Accept': 'application/vnd.GitHub.v3+json',
'Authorization': `token ${token}`
}}
).then((res) => {reposAuth.value = res.data;
label.value = 'AUTHENTICATED';});
};
````

```
const res = await axios.get(
    `https://api.github.com/users/${username}`,
     {auth: {
            username: ${username},
            password: `${token}`
        }},
  );

label.value = 'AUTHENTICATED';
 reposAuth.value = res.data;
 console.log('INFO', 'authenticated called');
```

* However, when i used the second way, i was not getting the appropriate result. Authenticated call was not returning results with ``plan`` after making unauthenticated call.
  * I needed to wait for some period of time to make authenticated call again to get the ``plan`` in the result. I tried to use ``timeoout`` in headers but unfortunately that didnt work as well.
  * Then i realized to use ``Accept`` method ``application/vnd.GitHub.v3+json`` , which is highly recommended to make Github API calls that resolved the issue for me.
* Another problem i faced was to set environment variables for making ``username`` and ``token``  secure. Lot of time I  spent to use ``dotenv`` library which was throwing excpetions because of missing library ``fs``.
    * Then, I tried other way to set ``token`` using custom config file which works for me atlast. So, i have setup the config file and created config interface to set and use username and token in my project.
* Overall, i learned a lot about the different ways to authenticate API calls and how i can make one as per the requirement.
