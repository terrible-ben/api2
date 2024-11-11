{application,dynamic,
    [{compile_env,
         [{dynamic,
              ['Elixir.Dynamic.JWT'],
              {ok,[{issuer,<<"dynamic">>},
                   {secret_key,
                       <<"JhuzDzC3qhncUV4Xr+a/j1CCW6RRm66zu+uMbFd2NKcuI5NbfOc9ao1rsJNYTF0/">>},
                   {permissions,
                       #{auth => [create,read,update,delete],
                         base => [create,read,update,delete],
                         data => [create,read,update,delete],
                         documents => [create,read,update,delete],
                         records => [create,read,update,delete],
                         structure => [create,read,update,delete],
                         tables => [create,read,update,delete],
                         view => [create,read,update,delete]}}]}}]},
     {applications,
         [kernel,stdlib,elixir,logger,runtime_tools,prom_ex,ecto,ecto_sql,
          postgrex,jason,json_schema,ex_json_schema,execjs,open_api_spex,
          corsica,nimble_parsec,json_view,plug_socket,ueberauth,
          ueberauth_identity,bcrypt_elixir,scrivener,pbkdf2_elixir,slugify,
          distillery,scrivener_ecto,scrivener_list,toml,guardian_db,bamboo,
          phoenix_html,guardian,nested_filter,ex_machina,oban,timex,
          google_api_storage,goth,waffle,waffle_gcs,waffle_ecto,elasticsearch,
          plug_cowboy,tzdata,snap,finch,reverse_proxy_plug,inflex]},
     {description,"dynamic"},
     {modules,
         ['Elixir.Dynamic',
          'Elixir.Dynamic.AccessControls.AccessControlsHandler',
          'Elixir.Dynamic.AccessControls.AccessControlsRouter',
          'Elixir.Dynamic.ApiSpec','Elixir.Dynamic.Application',
          'Elixir.Dynamic.Audit.Audit','Elixir.Dynamic.Audit.AuditRouter',
          'Elixir.Dynamic.Auth.AuthRouter','Elixir.Dynamic.AuthErrorHandler',
          'Elixir.Dynamic.Authentication',
          'Elixir.Dynamic.AvatarUploader.File',
          'Elixir.Dynamic.AvatarUploader.File.Type',
          'Elixir.Dynamic.BaseContent','Elixir.Dynamic.BaseStructures',
          'Elixir.Dynamic.CheckPermissions','Elixir.Dynamic.ConditionParser',
          'Elixir.Dynamic.Converter',
          'Elixir.Dynamic.Dashboard.DashboardHandler',
          'Elixir.Dynamic.Dashboard.DashboardRouter',
          'Elixir.Dynamic.Data.Data','Elixir.Dynamic.Data.DataHandler',
          'Elixir.Dynamic.Data.DataHandler.Job',
          'Elixir.Dynamic.Data.DataHandler.Request',
          'Elixir.Dynamic.Data.DataRouter',
          'Elixir.Dynamic.DateTimeWithOffset','Elixir.Dynamic.DbmlParser',
          'Elixir.Dynamic.Docs.AuditSchema',
          'Elixir.Dynamic.Docs.AuditSchema.Index',
          'Elixir.Dynamic.Docs.AuthSchema',
          'Elixir.Dynamic.Docs.AuthSchema.Delete',
          'Elixir.Dynamic.Docs.AuthSchema.Post',
          'Elixir.Dynamic.Docs.DataSchema',
          'Elixir.Dynamic.Docs.DataSchema.Delete',
          'Elixir.Dynamic.Docs.DataSchema.Docs',
          'Elixir.Dynamic.Docs.DataSchema.Show',
          'Elixir.Dynamic.Docs.DataSchema.Update',
          'Elixir.Dynamic.Docs.DbdocsGenerator',
          'Elixir.Dynamic.Docs.DbmlGenerator','Elixir.Dynamic.Docs.DbmlGojs',
          'Elixir.Dynamic.Docs.DocsGenerator',
          'Elixir.Dynamic.Docs.DocsRouter','Elixir.Dynamic.Docs.FilesSchema',
          'Elixir.Dynamic.Docs.FilesSchema.Delete',
          'Elixir.Dynamic.Docs.FilesSchema.Index',
          'Elixir.Dynamic.Docs.FilesSchema.Post',
          'Elixir.Dynamic.Docs.FilesSchema.Show',
          'Elixir.Dynamic.Docs.FilesSchema.Update',
          'Elixir.Dynamic.Docs.IndexSchema',
          'Elixir.Dynamic.Docs.IndexSchema.Delete',
          'Elixir.Dynamic.Docs.IndexSchema.Get',
          'Elixir.Dynamic.Docs.IndexSchema.Index',
          'Elixir.Dynamic.Docs.IndexSchema.Post',
          'Elixir.Dynamic.Docs.JsonSchemaCompiler',
          'Elixir.Dynamic.Docs.JsonSchemaUiCompiler',
          'Elixir.Dynamic.Docs.MermaidGenerator',
          'Elixir.Dynamic.Docs.RoleSchema',
          'Elixir.Dynamic.Docs.RoleSchema.Delete',
          'Elixir.Dynamic.Docs.RoleSchema.Index',
          'Elixir.Dynamic.Docs.RoleSchema.Post',
          'Elixir.Dynamic.Docs.RoleSchema.Show',
          'Elixir.Dynamic.Docs.RoleSchema.Update',
          'Elixir.Dynamic.Docs.SchemaApi','Elixir.Dynamic.Docs.SchemaMacro',
          'Elixir.Dynamic.Docs.SearchSchema',
          'Elixir.Dynamic.Docs.SearchSchema.Index',
          'Elixir.Dynamic.Docs.StructureSchema',
          'Elixir.Dynamic.Docs.StructureSchema.Get',
          'Elixir.Dynamic.Docs.StructureSchema.Post',
          'Elixir.Dynamic.Docs.UserSchema',
          'Elixir.Dynamic.Docs.UserSchema.Delete',
          'Elixir.Dynamic.Docs.UserSchema.Index',
          'Elixir.Dynamic.Docs.UserSchema.Post',
          'Elixir.Dynamic.Docs.UserSchema.Show',
          'Elixir.Dynamic.Docs.UserSchema.Update',
          'Elixir.Dynamic.Docs.ViewSchema',
          'Elixir.Dynamic.Docs.ViewSchema.Get',
          'Elixir.Dynamic.Docs.ViewSchema.Post',
          'Elixir.Dynamic.DynamicHandler','Elixir.Dynamic.DynamicRouter',
          'Elixir.Dynamic.Elasticsearch.Document',
          'Elixir.Dynamic.Elasticsearch.ElasticsearchStore',
          'Elixir.Dynamic.ElasticsearchCluster',
          'Elixir.Dynamic.EncodedParser',
          'Elixir.Dynamic.Endpoints.EndpointHandler',
          'Elixir.Dynamic.Endpoints.EndpointRouter',
          'Elixir.Dynamic.FileUploader.Files',
          'Elixir.Dynamic.FileUploader.Files.Type',
          'Elixir.Dynamic.Files.FilesHandler',
          'Elixir.Dynamic.Files.FilesRouter',
          'Elixir.Dynamic.Functions.AddKey',
          'Elixir.Dynamic.Functions.CreateIndex',
          'Elixir.Dynamic.Functions.CreateRecord',
          'Elixir.Dynamic.Functions.CreateTable',
          'Elixir.Dynamic.Functions.CreateView',
          'Elixir.Dynamic.Functions.DeleteIndex',
          'Elixir.Dynamic.Functions.DeleteRecord',
          'Elixir.Dynamic.Functions.DeleteTable',
          'Elixir.Dynamic.Functions.DeleteView',
          'Elixir.Dynamic.Functions.Helpers',
          'Elixir.Dynamic.Functions.ReadLogs',
          'Elixir.Dynamic.Functions.ReadRecord',
          'Elixir.Dynamic.Functions.ReadTable',
          'Elixir.Dynamic.Functions.ReadView',
          'Elixir.Dynamic.Functions.RecordsTable',
          'Elixir.Dynamic.Functions.Relations',
          'Elixir.Dynamic.Functions.TablesTable',
          'Elixir.Dynamic.Functions.UpdateRecord',
          'Elixir.Dynamic.Functions.UpdateTable',
          'Elixir.Dynamic.Functions.UpdateTimestamps',
          'Elixir.Dynamic.Functions.UpdateView',
          'Elixir.Dynamic.Functions.ViewsTable','Elixir.Dynamic.GlobalSetup',
          'Elixir.Dynamic.Goth','Elixir.Dynamic.Helpers.HelpersRouter',
          'Elixir.Dynamic.Import.ImportRouter',
          'Elixir.Dynamic.Indexes.IndexHandler',
          'Elixir.Dynamic.Indexes.IndexHandler.Request',
          'Elixir.Dynamic.Indexes.IndexRouter','Elixir.Dynamic.JWT',
          'Elixir.Dynamic.JWT.Plug','Elixir.Dynamic.Jobs.CreateJob',
          'Elixir.Dynamic.Jobs.JobsRouter','Elixir.Dynamic.JsonResolver',
          'Elixir.Dynamic.Jsonb','Elixir.Dynamic.Logs.LogsHandler',
          'Elixir.Dynamic.Logs.LogsRouter',
          'Elixir.Dynamic.Oban.AbstractWorker',
          'Elixir.Dynamic.Oban.ArchiveRecords',
          'Elixir.Dynamic.Oban.CleanLogs','Elixir.Dynamic.Plug.AuthHandler',
          'Elixir.Dynamic.Plug.CurrentUser',
          'Elixir.Dynamic.Plug.RequestLogger','Elixir.Dynamic.PromEx',
          'Elixir.Dynamic.QueryBuilder','Elixir.Dynamic.Release',
          'Elixir.Dynamic.Repo','Elixir.Dynamic.ReservedNames',
          'Elixir.Dynamic.Roles.RolesRouter','Elixir.Dynamic.Router',
          'Elixir.Dynamic.SchemaCompiler','Elixir.Dynamic.Schemas',
          'Elixir.Dynamic.Schemas.AuthRequest',
          'Elixir.Dynamic.Schemas.AuthResponse',
          'Elixir.Dynamic.Schemas.BadRequestError',
          'Elixir.Dynamic.Schemas.ConflictError',
          'Elixir.Dynamic.Schemas.CreateData',
          'Elixir.Dynamic.Schemas.CreateDataResponce',
          'Elixir.Dynamic.Schemas.CreateStructure',
          'Elixir.Dynamic.Schemas.CreateStructureBody',
          'Elixir.Dynamic.Schemas.CreateStructureBodySchema',
          'Elixir.Dynamic.Schemas.CreateView',
          'Elixir.Dynamic.Schemas.CreateViewBody',
          'Elixir.Dynamic.Schemas.CreateViewBodySchema',
          'Elixir.Dynamic.Schemas.DataObject',
          'Elixir.Dynamic.Schemas.DataRequest',
          'Elixir.Dynamic.Schemas.DataResponse',
          'Elixir.Dynamic.Schemas.DeleteData',
          'Elixir.Dynamic.Schemas.DeleteDataResponce',
          'Elixir.Dynamic.Schemas.DeleteStructure',
          'Elixir.Dynamic.Schemas.DeleteStructureBody',
          'Elixir.Dynamic.Schemas.DeleteViewBody',
          'Elixir.Dynamic.Schemas.Files',
          'Elixir.Dynamic.Schemas.ForbiddenError',
          'Elixir.Dynamic.Schemas.GetStructureColumnSchema',
          'Elixir.Dynamic.Schemas.GetStructureResponse',
          'Elixir.Dynamic.Schemas.GetStructureTableSchema',
          'Elixir.Dynamic.Schemas.GroupRoles','Elixir.Dynamic.Schemas.Groups',
          'Elixir.Dynamic.Schemas.InternalServerError',
          'Elixir.Dynamic.Schemas.NotFoundError',
          'Elixir.Dynamic.Schemas.ReadData',
          'Elixir.Dynamic.Schemas.ReadDataResponce',
          'Elixir.Dynamic.Schemas.ReadStructure',
          'Elixir.Dynamic.Schemas.ReadStructureBody',
          'Elixir.Dynamic.Schemas.ReadStructureBodySchema',
          'Elixir.Dynamic.Schemas.ReadStructureResponse',
          'Elixir.Dynamic.Schemas.ReadView',
          'Elixir.Dynamic.Schemas.ReadViewBody',
          'Elixir.Dynamic.Schemas.ReadViewResponse',
          'Elixir.Dynamic.Schemas.RequestLogs','Elixir.Dynamic.Schemas.Roles',
          'Elixir.Dynamic.Schemas.RolesGetRequest',
          'Elixir.Dynamic.Schemas.RolesPostRequest',
          'Elixir.Dynamic.Schemas.RolesResponse',
          'Elixir.Dynamic.Schemas.StructureData',
          'Elixir.Dynamic.Schemas.StructureErrorNotFoundResponse',
          'Elixir.Dynamic.Schemas.StructureObject',
          'Elixir.Dynamic.Schemas.StructureRequest',
          'Elixir.Dynamic.Schemas.UnauthorizedError',
          'Elixir.Dynamic.Schemas.UnprocessableEntityError',
          'Elixir.Dynamic.Schemas.UpdateData',
          'Elixir.Dynamic.Schemas.UpdateDataResponce',
          'Elixir.Dynamic.Schemas.UpdateStructure',
          'Elixir.Dynamic.Schemas.UpdateStructureBody',
          'Elixir.Dynamic.Schemas.UpdateStructureBodySchema',
          'Elixir.Dynamic.Schemas.UpdateView',
          'Elixir.Dynamic.Schemas.UpdateViewBody',
          'Elixir.Dynamic.Schemas.UpdateViewBodySchema',
          'Elixir.Dynamic.Schemas.UserGroups',
          'Elixir.Dynamic.Schemas.UserRequest',
          'Elixir.Dynamic.Schemas.UserResponse',
          'Elixir.Dynamic.Schemas.UserRoles','Elixir.Dynamic.Schemas.Users',
          'Elixir.Dynamic.Schemas.ViewData',
          'Elixir.Dynamic.Schemas.ViewErrorInvalidResponse',
          'Elixir.Dynamic.Schemas.ViewErrorNotFoundResponse',
          'Elixir.Dynamic.Schemas.ViewErrorResponse',
          'Elixir.Dynamic.Schemas.ViewRequest',
          'Elixir.Dynamic.Schemas.ViewResponse',
          'Elixir.Dynamic.Search.SearchHandler',
          'Elixir.Dynamic.Search.SearchRouter',
          'Elixir.Dynamic.SetPermissions','Elixir.Dynamic.SetSchemas',
          'Elixir.Dynamic.SocketHandler',
          'Elixir.Dynamic.Structure.ColumnDefinitions',
          'Elixir.Dynamic.Structure.StructureHandler',
          'Elixir.Dynamic.Structure.StructureHandler.Job',
          'Elixir.Dynamic.Structure.StructureHandler.Request',
          'Elixir.Dynamic.Structure.StructureRouter',
          'Elixir.Dynamic.Structures.Avatar','Elixir.Dynamic.Structures.Base',
          'Elixir.Dynamic.Structures.Config',
          'Elixir.Dynamic.Structures.Document',
          'Elixir.Dynamic.Structures.Endpoint',
          'Elixir.Dynamic.Structures.File','Elixir.Dynamic.Structures.Group',
          'Elixir.Dynamic.Structures.GroupRole',
          'Elixir.Dynamic.Structures.Job','Elixir.Dynamic.Structures.Record',
          'Elixir.Dynamic.Structures.RequestLog',
          'Elixir.Dynamic.Structures.Role','Elixir.Dynamic.Structures.Table',
          'Elixir.Dynamic.Structures.User',
          'Elixir.Dynamic.Structures.UserGroup',
          'Elixir.Dynamic.Structures.UserRole',
          'Elixir.Dynamic.Structures.View','Elixir.Dynamic.SubqueryParser',
          'Elixir.Dynamic.Users.UsersRouter','Elixir.Dynamic.Utils',
          'Elixir.Dynamic.Validations.BaseTable',
          'Elixir.Dynamic.View.ViewHandler',
          'Elixir.Dynamic.View.ViewHandler.Request',
          'Elixir.Dynamic.View.ViewRouter','Elixir.Dynamic.ViewParser',
          'Elixir.Dynamic.Views.AccessControlsView',
          'Elixir.Dynamic.Views.ConfigView',
          'Elixir.Dynamic.Views.EndpointView',
          'Elixir.Dynamic.Views.ErrorView','Elixir.Dynamic.Views.GroupView',
          'Elixir.Dynamic.Views.JobsView','Elixir.Dynamic.Views.RecordView',
          'Elixir.Dynamic.Views.RoleView','Elixir.Dynamic.Views.TableView',
          'Elixir.Dynamic.Views.UserView','Elixir.Dynamic.Views.ViewView',
          'Elixir.Dynamic.Workflows','Elixir.Dynamic.Workflows.Action',
          'Elixir.Dynamic.Workflows.Condition',
          'Elixir.Dynamic.Workflows.Step','Elixir.Dynamic.Workflows.Workflow',
          'Elixir.Elasticsearch.Document.Dynamic.Structures.Document',
          'Elixir.Elasticsearch.Document.Dynamic.Structures.Record',
          'Elixir.Elasticsearch.Document.Dynamic.Structures.Table',
          'Elixir.Elasticsearch.Document.Dynamic.Structures.View',
          'Elixir.Jason.Encoder.Dynamic.Schemas.AuthRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.AuthResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.BadRequestError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ConflictError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateData',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateDataResponce',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateStructure',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateStructureBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateStructureBodySchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateView',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateViewBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.CreateViewBodySchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DataObject',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DataRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DataResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DeleteData',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DeleteDataResponce',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DeleteStructure',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DeleteStructureBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.DeleteViewBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.Files',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ForbiddenError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.GetStructureColumnSchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.GetStructureResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.GetStructureTableSchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.GroupRoles',
          'Elixir.Jason.Encoder.Dynamic.Schemas.Groups',
          'Elixir.Jason.Encoder.Dynamic.Schemas.InternalServerError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.NotFoundError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadData',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadDataResponce',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadStructure',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadStructureBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadStructureBodySchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadStructureResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadView',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadViewBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ReadViewResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.RequestLogs',
          'Elixir.Jason.Encoder.Dynamic.Schemas.Roles',
          'Elixir.Jason.Encoder.Dynamic.Schemas.RolesGetRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.RolesPostRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.RolesResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.StructureData',
          'Elixir.Jason.Encoder.Dynamic.Schemas.StructureErrorNotFoundResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.StructureObject',
          'Elixir.Jason.Encoder.Dynamic.Schemas.StructureRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UnauthorizedError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UnprocessableEntityError',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateData',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateDataResponce',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateStructure',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateStructureBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateStructureBodySchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateView',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateViewBody',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UpdateViewBodySchema',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UserGroups',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UserRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UserResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.UserRoles',
          'Elixir.Jason.Encoder.Dynamic.Schemas.Users',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ViewData',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ViewErrorInvalidResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ViewErrorNotFoundResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ViewErrorResponse',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ViewRequest',
          'Elixir.Jason.Encoder.Dynamic.Schemas.ViewResponse',
          'Elixir.Jason.Encoder.Dynamic.Structures.Endpoint',
          'Elixir.Jason.Encoder.Dynamic.Structures.File',
          'Elixir.Jason.Encoder.Dynamic.Structures.Role',
          'Elixir.Jason.Encoder.Dynamic.Structures.User',
          'Elixir.Poison.Encoder.Dynamic.Schemas.AuthRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.AuthResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.BadRequestError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ConflictError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateData',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateDataResponce',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateStructure',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateStructureBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateStructureBodySchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateView',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateViewBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.CreateViewBodySchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DataObject',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DataRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DataResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DeleteData',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DeleteDataResponce',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DeleteStructure',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DeleteStructureBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.DeleteViewBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.Files',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ForbiddenError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.GetStructureColumnSchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.GetStructureResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.GetStructureTableSchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.GroupRoles',
          'Elixir.Poison.Encoder.Dynamic.Schemas.Groups',
          'Elixir.Poison.Encoder.Dynamic.Schemas.InternalServerError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.NotFoundError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadData',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadDataResponce',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadStructure',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadStructureBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadStructureBodySchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadStructureResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadView',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadViewBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ReadViewResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.RequestLogs',
          'Elixir.Poison.Encoder.Dynamic.Schemas.Roles',
          'Elixir.Poison.Encoder.Dynamic.Schemas.RolesGetRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.RolesPostRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.RolesResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.StructureData',
          'Elixir.Poison.Encoder.Dynamic.Schemas.StructureErrorNotFoundResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.StructureObject',
          'Elixir.Poison.Encoder.Dynamic.Schemas.StructureRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UnauthorizedError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UnprocessableEntityError',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateData',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateDataResponce',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateStructure',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateStructureBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateStructureBodySchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateView',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateViewBody',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UpdateViewBodySchema',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UserGroups',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UserRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UserResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.UserRoles',
          'Elixir.Poison.Encoder.Dynamic.Schemas.Users',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ViewData',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ViewErrorInvalidResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ViewErrorNotFoundResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ViewErrorResponse',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ViewRequest',
          'Elixir.Poison.Encoder.Dynamic.Schemas.ViewResponse']},
     {registered,[]},
     {vsn,"0.1.0"},
     {mod,{'Elixir.Dynamic.Application',[]}}]}.