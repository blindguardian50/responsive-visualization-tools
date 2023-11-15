# responsive-visualization-tools

Deployed at https://responsive-visualization-tools.netlify.app/


## Commands:

1. Command for removing existing dist and .parcel-cache folder.
```
npm run clean
```

2. Command for building ready-to-deploy dist folder. 
   Includes the invocation of the clean command at the beginning.
   The root url of the domain must be passed as parameter. 


   
```
npm run build -- --public-url <root-url> --dist-dir <directory-name>
```

3. Command for serving and developing. Includes the invocation of the clean command at the beginning.
```
npm run dev
```

## Build Example

Example command for deploying to the subdomain /directory/subdomain and directly
generating the dist folder:

npm run build -- --public-url /directory/subdomain --dist-dir directory/subdomain
