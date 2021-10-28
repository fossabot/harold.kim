# harold.kim

harold.kim on Vue, design by stypr. MIT License (Clause 4).

Rebuilt to work with SSR support. Commits before [ce4d3e34](https://github.com/stypr/harold.kim/commit/ce4d3e34bd119a3b07537d16cc7b40f1c63c3f43) are for SPA applicaitons.

The latest commit is running on the production.

## Notes

* Blog posts (`src/blog/yyyy/mm/permalink/index.md`) are not uploaded on this repository.
* Avatars are not included in this repository as it contains copyrights to respective authors. Some resources have been encrypted(?) internally.
    * The encryption/decryption routine is not uploaded in this repository, however this does not affect the code itself. You can upload your avatar on `src/public` and load it from the `BackgroundAvatar.vue`.

## Setup

* Install: `./setup.sh`
* Add blog posts
* Add avatar.

## Run

* Run Dev: `yarn dev`
* Run Build: `yarn build && yarn serve`
* Deploy: `./deploy.sh`