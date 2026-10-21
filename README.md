# ajay.github.io

[![deploy](https://github.com/ajay/ajay.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ajay/ajay.github.io/actions/workflows/deploy.yml) [![make-ci](https://github.com/ajay/ajay.github.io/actions/workflows/make-ci.yml/badge.svg)](https://github.com/ajay/ajay.github.io/actions/workflows/make-ci.yml)

The root of [ajay.engineer](https://ajay.engineer/): a minimal page of links to subpages, sites and socials.
Subpages such as [ajay.engineer/travel](https://ajay.engineer/travel/) live in their own repos.

```sh
git submodule update --init --recursive
make serve    # http://localhost:8000
make format   # run before pushing: CI checks formatting with `make ci`
```
