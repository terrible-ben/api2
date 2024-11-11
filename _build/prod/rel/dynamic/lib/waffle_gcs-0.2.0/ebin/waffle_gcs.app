{application,waffle_gcs,
             [{applications,[kernel,stdlib,elixir,waffle,goth,
                             google_api_storage]},
              {description,"Google Cloud Storage integration for Waffle file uploader library."},
              {modules,['Elixir.Waffle.Storage.Google.CloudStorage',
                        'Elixir.Waffle.Storage.Google.Token.DefaultFetcher',
                        'Elixir.Waffle.Storage.Google.Token.Fetcher',
                        'Elixir.Waffle.Storage.Google.Url',
                        'Elixir.Waffle.Storage.Google.UrlV2',
                        'Elixir.Waffle.Storage.Google.Util',
                        'Elixir.Waffle.Types']},
              {registered,[]},
              {vsn,"0.2.0"}]}.