# Create composer repository by using [Satis](https://github.com/composer/satis)

## Install Satis

```
composer create-project composer/satis:dev-main
```

## Create some packages

See package1, package2, skeleton for example

## Create satis.json

In the directory where you want to place the satis.json, Run `php [SATIS_DIR]/bin/satis init`. It will create a satis.json

Then open the satis.json and update the `repositories` field.

## Build the composer repository

```
php bin/satis build <configuration-file> <output-directory>
```
