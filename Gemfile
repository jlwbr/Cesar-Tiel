source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.2.1"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem 'jekyll-sitemap'
  gem 'jekyll-pug'
  gem 'jekyll-responsive-image'
end

#TEMP ffi fix (as of 11-2-2018 version 1.9.21 fails to build)
# gem 'ffi', '1.9.18'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Added at 2021-12-06 14:33:32 +0100 by joel:
gem "webrick", "~> 1.7"
gem "ffi", "~> 1.15"
