# meteor-google-cloud
Wrapper for Node "gcloud" package
<hr>
### Authorization

*Inspiration (and some text) taken from [meteor-slingshot](https://github.com/CulturalMe/meteor-slingshot/)*

[Generate a private key](http://goo.gl/kxt5qz) and convert it to a `.pem` file
using openssl:

```
openssl pkcs12 -in google-cloud-service-key.p12 -nodes -nocerts > google-cloud-service-key.pem
```

Setup CORS on the bucket:

```
gsutil cors set docs/gs-cors.json gs://your-bucket-name
```

Save this file into the `/private` directory of your meteor app and add this
line to your server-side code:

```JavaScript
GoogleCloud = new gcloud({
	projectId: Meteor.settings.private.Google.projectId,
	credentials: {
		client_email: Meteor.settings.private.Google.accessId,
		private_key: Assets.getText('google-cloud-service-key.pem')
	}
});
```

Note that you will need to place your `projectId` and `accessId` in your `settings.json` nested under `private: { Google: {` (or change the code above to match your preferred settings).

You can also set your authorization config "per service" if you do not prefer the global configuration. In that case you would use the existing global variable `gcloud` and simply:
```JavaScript
gcloud.storage(/* { your auth object } */);
```
### Use

Now you can do the following:

```JavaScript
GoogleCloud.storage().createBucket('/* a unique bucket name */', function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log('Success!');
  }
});
```

... along with [all the other things](https://github.com/GoogleCloudPlatform/gcloud-node).
<hr>
This is my second Meteor package, so feel free to let me know how I can improve it or if you run into any issues. :)
