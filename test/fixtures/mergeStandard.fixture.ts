export const newKey = {
  '/newKey': {
    add: 'breaking',
    remove: 'unclassified',
    edit: 'breaking',
  },
};

export const exisitngKey = {
  '/servers': {
    add: 'unclassified',
    remove: 'unclassified',
    edit: 'unclassified',
  },
};

export const standardAsString =
  '{"/asyncapi":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/id":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/defaultContentType":{"add":"breaking","remove":"breaking","edit":"breaking"},"/info":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/version":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/termsOfService":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/license":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/license/name":{"add":"breaking","remove":"breaking","edit":"breaking"},"/info/license/url":{"add":"breaking","remove":"non-breaking","edit":"non-breaking"},"/info/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/url":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/email":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/url":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/protocol":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/protocolVersion":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/enum":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/default":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/variables/*/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/security":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/traits/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/traits/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/traits/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/payload":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/traits/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/traits/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/traits/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/payload":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/parameters":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/parameters/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/parameters/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/parameters/*/schema":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/parameters/*/location":{"add":"breaking","remove":"breaking","edit":"breaking"},"/components":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"}}';

export const mergedStandardAsString =
  '{"/asyncapi":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/id":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/defaultContentType":{"add":"breaking","remove":"breaking","edit":"breaking"},"/info":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/version":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/termsOfService":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/license":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/license/name":{"add":"breaking","remove":"breaking","edit":"breaking"},"/info/license/url":{"add":"breaking","remove":"non-breaking","edit":"non-breaking"},"/info/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/url":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/email":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/url":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/protocol":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/protocolVersion":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/enum":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/default":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/variables/*/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/security":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/traits/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/traits/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/traits/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/payload":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/traits/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/traits/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/traits/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/payload":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/parameters":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/parameters/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/parameters/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/parameters/*/schema":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/parameters/*/location":{"add":"breaking","remove":"breaking","edit":"breaking"},"/components":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/newKey":{"add":"breaking","remove":"unclassified","edit":"breaking"}}';

export const exisitingKeyStandard =
  '{"/asyncapi":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/id":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/defaultContentType":{"add":"breaking","remove":"breaking","edit":"breaking"},"/info":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/version":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/termsOfService":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/license":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/info/license/name":{"add":"breaking","remove":"breaking","edit":"breaking"},"/info/license/url":{"add":"breaking","remove":"non-breaking","edit":"non-breaking"},"/info/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/url":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/info/contact/email":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/servers/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/url":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/protocol":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/protocolVersion":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/enum":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/default":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/variables/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/variables/*/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/servers/*/security":{"add":"breaking","remove":"breaking","edit":"breaking"},"/servers/*/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/traits/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/traits/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/subscribe/message/traits/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/subscribe/message/traits/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/subscribe/message/payload":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/traits/operationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/headers":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/traits/correlationId":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/correlationId/location":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/correlationId/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/schemaFormat":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/contentType":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/publish/message/traits/name":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/title":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/summary":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/traits/bindings":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/publish/message/traits/examples":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/publish/message/payload":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/parameters":{"add":"breaking","remove":"breaking","edit":"breaking"},"/channels/*/parameters/*":{"add":"non-breaking","remove":"breaking","edit":"breaking"},"/channels/*/parameters/*/description":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/channels/*/parameters/*/schema":{"add":"unclassified","remove":"unclassified","edit":"unclassified"},"/channels/*/parameters/*/location":{"add":"breaking","remove":"breaking","edit":"breaking"},"/components":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/tags":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/externalDocs":{"add":"non-breaking","remove":"non-breaking","edit":"non-breaking"},"/newKey":{"add":"breaking","remove":"unclassified","edit":"breaking"}}';
