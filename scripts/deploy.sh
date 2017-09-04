#!/usr/bin/env sh
aws s3 sync build/ s3://cocktails.josephstahl.com --delete
aws s3 cp s3://cocktails.josephstahl.com/index.html s3://cocktails.josephstahl.com/index.html --metadata-directive REPLACE --cache-control max-age=3600
aws s3 cp s3://cocktails.josephstahl.com/data/db.json s3://cocktails.josephstahl.com/data/db.json --metadata-directive REPLACE --cache-control max-age=3600