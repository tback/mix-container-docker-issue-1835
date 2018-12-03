# mix docker demonstration
Demonstrates an issue with containerized mix. This is not a development environment for laravel using an docker. It's just a very isolated example.

Start mix (requires Docker):
```
make run
```

Issue:
Assets are written to public/app/app/css/app.css and public/app/app/public/app/public/js/app.js not public/css/app.css and public/js/app.js

