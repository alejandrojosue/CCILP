import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBitacoraBitacora extends Schema.CollectionType {
  collectionName: 'bitacoras';
  info: {
    singularName: 'bitacora';
    pluralName: 'bitacoras';
    displayName: 'Bitacora';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    users_permissions_user: Attribute.Relation<
      'api::bitacora.bitacora',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    Descripcion: Attribute.String & Attribute.Required;
    Accion: Attribute.Enumeration<['POST', 'PUT', 'DELETE']> &
      Attribute.Required;
    Datos: Attribute.JSON & Attribute.Required;
    admin_user: Attribute.Relation<
      'api::bitacora.bitacora',
      'oneToOne',
      'admin::user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bitacora.bitacora',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bitacora.bitacora',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoriaCategoria extends Schema.CollectionType {
  collectionName: 'categorias';
  info: {
    singularName: 'categoria';
    pluralName: 'categorias';
    displayName: 'Categor\u00EDas';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Categoria: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::categoria.categoria',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::categoria.categoria',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConfigConfig extends Schema.SingleType {
  collectionName: 'configs';
  info: {
    singularName: 'config';
    pluralName: 'configs';
    displayName: 'Config';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Director: Attribute.String & Attribute.Required;
    Telefonos: Attribute.String & Attribute.Required;
    Direccion: Attribute.Text & Attribute.Required;
    CorreosElectronicos: Attribute.Text & Attribute.Required;
    Website: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::config.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::config.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConstanciaRegistroConstanciaRegistro
  extends Schema.CollectionType {
  collectionName: 'constancia_registros';
  info: {
    singularName: 'constancia-registro';
    pluralName: 'constancia-registros';
    displayName: 'Constancias de Registro';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    empresa: Attribute.Relation<
      'api::constancia-registro.constancia-registro',
      'oneToOne',
      'api::empresa.empresa'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::constancia-registro.constancia-registro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::constancia-registro.constancia-registro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConstanciaRenovacionConstanciaRenovacion
  extends Schema.CollectionType {
  collectionName: 'constancia_renovacions';
  info: {
    singularName: 'constancia-renovacion';
    pluralName: 'constancia-renovacions';
    displayName: 'Constancias de Renovaci\u00F3n';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    empresa: Attribute.Relation<
      'api::constancia-renovacion.constancia-renovacion',
      'oneToOne',
      'api::empresa.empresa'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::constancia-renovacion.constancia-renovacion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::constancia-renovacion.constancia-renovacion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConstanciaSolvenciaConstanciaSolvencia
  extends Schema.CollectionType {
  collectionName: 'constancia_solvencias';
  info: {
    singularName: 'constancia-solvencia';
    pluralName: 'constancia-solvencias';
    displayName: 'Constancias de Solvencia';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    empresa: Attribute.Relation<
      'api::constancia-solvencia.constancia-solvencia',
      'oneToOne',
      'api::empresa.empresa'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::constancia-solvencia.constancia-solvencia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::constancia-solvencia.constancia-solvencia',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDenominacionDenominacion extends Schema.CollectionType {
  collectionName: 'denominacions';
  info: {
    singularName: 'denominacion';
    pluralName: 'denominacions';
    displayName: 'Denominaciones';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Denominacion: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::denominacion.denominacion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::denominacion.denominacion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmprendedorEmprendedor extends Schema.CollectionType {
  collectionName: 'emprendedors';
  info: {
    singularName: 'emprendedor';
    pluralName: 'emprendedors';
    displayName: 'Emprendedores';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    NombreCompleto: Attribute.String & Attribute.Required;
    DNI: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 13;
        maxLength: 13;
      }>;
    CorreoElectronico: Attribute.Email;
    Telefono: Attribute.String & Attribute.Required;
    Direccion: Attribute.Text & Attribute.Required;
    FecNac: Attribute.Date & Attribute.Required;
    Sexo: Attribute.Enumeration<['M', 'F']> &
      Attribute.Required &
      Attribute.DefaultTo<'M'>;
    programa: Attribute.Relation<
      'api::emprendedor.emprendedor',
      'oneToOne',
      'api::programa.programa'
    >;
    TieneEscritura: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    OtrosTramites: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::emprendedor.emprendedor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::emprendedor.emprendedor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmpresaEmpresa extends Schema.CollectionType {
  collectionName: 'empresas';
  info: {
    singularName: 'empresa';
    pluralName: 'empresas';
    displayName: 'Empresas';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Activo: Attribute.Boolean & Attribute.DefaultTo<true>;
    tipo_tramite: Attribute.Relation<
      'api::empresa.empresa',
      'oneToOne',
      'api::tipo-tramite.tipo-tramite'
    > &
      Attribute.Required;
    filial: Attribute.Relation<
      'api::empresa.empresa',
      'oneToOne',
      'api::filial.filial'
    > &
      Attribute.Required;
    NombreEmpresa: Attribute.String & Attribute.Required;
    NombreComercial: Attribute.String & Attribute.Required;
    Direccion: Attribute.Text & Attribute.Required;
    TelefonoFax: Attribute.String;
    Celular: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 8;
        maxLength: 8;
      }>;
    CorreoElectronico: Attribute.Email;
    RTN: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 14;
        maxLength: 14;
      }>;
    Clasificacion: Attribute.Enumeration<
      ['Micro', 'Peque\u00F1a', 'Mediana', 'Grande', 'Exenta de Impuestos']
    > &
      Attribute.Required;
    NombreRepresentante: Attribute.String & Attribute.Required;
    NombreSubgerente: Attribute.String;
    NombreContador: Attribute.String;
    Encargado: Attribute.String;
    denominacion: Attribute.Relation<
      'api::empresa.empresa',
      'oneToOne',
      'api::denominacion.denominacion'
    > &
      Attribute.Required;
    NombreSocios: Attribute.Text;
    NumeroEscritura: Attribute.String;
    FechaConstitucion: Attribute.Date;
    RegistroMercantil: Attribute.Integer;
    TomoMercantil: Attribute.Integer;
    FechaMercantil: Attribute.Date;
    LugarDeclaracion: Attribute.String;
    NumeroEmpleados: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    ActividadEmpresarial: Attribute.Text & Attribute.Required;
    CapitalMaximo: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sector_desempenos: Attribute.Relation<
      'api::empresa.empresa',
      'oneToMany',
      'api::sector-desempeno.sector-desempeno'
    > &
      Attribute.Required;
    NumeroRegistro: Attribute.String & Attribute.Required;
    FOLIO: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    TOMO: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    categoria: Attribute.Relation<
      'api::empresa.empresa',
      'oneToOne',
      'api::categoria.categoria'
    > &
      Attribute.Required;
    PagoAfiliacion: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    CuotaMensual: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    ramas: Attribute.Relation<
      'api::empresa.empresa',
      'oneToMany',
      'api::rama.rama'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::empresa.empresa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::empresa.empresa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFilialFilial extends Schema.CollectionType {
  collectionName: 'filials';
  info: {
    singularName: 'filial';
    pluralName: 'filials';
    displayName: 'Filiales';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Filial: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::filial.filial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::filial.filial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramaPrograma extends Schema.CollectionType {
  collectionName: 'programas';
  info: {
    singularName: 'programa';
    pluralName: 'programas';
    displayName: 'Programas';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Programa: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::programa.programa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::programa.programa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProyectoProyecto extends Schema.CollectionType {
  collectionName: 'proyectos';
  info: {
    singularName: 'proyecto';
    pluralName: 'proyectos';
    displayName: 'Proyectos';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    NombreComercial: Attribute.String & Attribute.Required;
    RTN: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 14;
        maxLength: 14;
      }>;
    Direccion: Attribute.Text & Attribute.Required;
    Ciudad: Attribute.String & Attribute.Required;
    Telefono: Attribute.String & Attribute.Required;
    CorreoElectronico: Attribute.Email & Attribute.Required;
    Rubro: Attribute.String & Attribute.Required;
    TiempoOperar: Attribute.Enumeration<
      ['De 1 a\u00F1o', 'De 2-5 a\u00F1os', 'De 6 a\u00F1os o mas']
    > &
      Attribute.Required;
    NumeroEmpleados: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    NumeroMujeres: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    NumeroHombres: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    VentasMensuales: Attribute.Enumeration<
      [
        'De 500 - 3,000',
        'De 3,001 - 6,000',
        'De 6,001 - 10,000',
        'De 10,001 en adelante'
      ]
    > &
      Attribute.Required;
    VentasAnuales: Attribute.Enumeration<
      [
        'De 10,000 - 30,000',
        'De 30,001 - 60,000',
        'De 60,001 - 80,000',
        'De 80,001 en adelante'
      ]
    > &
      Attribute.Required;
    ProductosServicios: Attribute.Text & Attribute.Required;
    emprendedor: Attribute.Relation<
      'api::proyecto.proyecto',
      'oneToOne',
      'api::emprendedor.emprendedor'
    >;
    TipoNegocio: Attribute.Enumeration<['Propio', 'Familiar', 'Sociedad']> &
      Attribute.Required;
    Afiliado: Attribute.Boolean & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proyecto.proyecto',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proyecto.proyecto',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRamaRama extends Schema.CollectionType {
  collectionName: 'ramas';
  info: {
    singularName: 'rama';
    pluralName: 'ramas';
    displayName: 'Ramas';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    rama: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::rama.rama', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::rama.rama', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSectorDesempenoSectorDesempeno
  extends Schema.CollectionType {
  collectionName: 'sector_desempenos';
  info: {
    singularName: 'sector-desempeno';
    pluralName: 'sector-desempenos';
    displayName: 'Sectores de Desempe\u00F1o';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Sector: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sector-desempeno.sector-desempeno',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sector-desempeno.sector-desempeno',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSoporteTecnicoSoporteTecnico extends Schema.SingleType {
  collectionName: 'soporte_tecnicos';
  info: {
    singularName: 'soporte-tecnico';
    pluralName: 'soporte-tecnicos';
    displayName: 'SoporteTecnico';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    FechaExpiracion: Attribute.Date & Attribute.Required;
    FechaPagada: Attribute.Date & Attribute.Required;
    Costo: Attribute.Decimal & Attribute.Required;
    Estado: Attribute.Enumeration<['PENDIENTE', 'EN PROCESO', 'FINALIZADO']> &
      Attribute.Required &
      Attribute.DefaultTo<'FINALIZADO'>;
    Notas: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::soporte-tecnico.soporte-tecnico',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::soporte-tecnico.soporte-tecnico',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTipoTramiteTipoTramite extends Schema.CollectionType {
  collectionName: 'tipo_tramites';
  info: {
    singularName: 'tipo-tramite';
    pluralName: 'tipo-tramites';
    displayName: 'Tipos de Tr\u00E1mite';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Tipo: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tipo-tramite.tipo-tramite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tipo-tramite.tipo-tramite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::bitacora.bitacora': ApiBitacoraBitacora;
      'api::categoria.categoria': ApiCategoriaCategoria;
      'api::config.config': ApiConfigConfig;
      'api::constancia-registro.constancia-registro': ApiConstanciaRegistroConstanciaRegistro;
      'api::constancia-renovacion.constancia-renovacion': ApiConstanciaRenovacionConstanciaRenovacion;
      'api::constancia-solvencia.constancia-solvencia': ApiConstanciaSolvenciaConstanciaSolvencia;
      'api::denominacion.denominacion': ApiDenominacionDenominacion;
      'api::emprendedor.emprendedor': ApiEmprendedorEmprendedor;
      'api::empresa.empresa': ApiEmpresaEmpresa;
      'api::filial.filial': ApiFilialFilial;
      'api::programa.programa': ApiProgramaPrograma;
      'api::proyecto.proyecto': ApiProyectoProyecto;
      'api::rama.rama': ApiRamaRama;
      'api::sector-desempeno.sector-desempeno': ApiSectorDesempenoSectorDesempeno;
      'api::soporte-tecnico.soporte-tecnico': ApiSoporteTecnicoSoporteTecnico;
      'api::tipo-tramite.tipo-tramite': ApiTipoTramiteTipoTramite;
    }
  }
}
