// servicios, utilizando los modelos.
import * as genericModel from '../models/generic.model.js';
/*import collection from '../models/collections.model.js';
*/
//no me gusta que este en service, deberia ir en middleware?. investigar.
//colecciones que no se pueden tocar por usuarios, solo por admin.
const PROTECTED_COLLECTIONS = ['cuentas', 'auditoria'];

/*Se activara en el proximo update
//ver todas las colecciones existentes, menos las protegidas.
export const getAllCollections = async () => {
  return await collection.getAllCollection();
};*/

export const getAll = async (collection) => {
  return await genericModel.getAllDocuments(collection);
};

export const getById = async (collection, id) => {
  return await genericModel.getDocumentById(collection, id);
};

export const create = async (collection, data, userToken) => {
  //verificamos que si es protegida y no es admin, no se pueda crear en la misma.
  if(PROTECTED_COLLECTIONS.includes( collection ) && userToken?.role !== 'admin'){
    throw new Error('Acceso denegado a coleccion protegida');
  };

  const doc = await genericModel.createDocument(collection, data);
  
  await genericModel.createDocument('auditoria', {
    user: userToken?.user || 'anon',
    action: 'create',
    collection,
    data,
    timestamp: Date.now()
  });

  return doc;
};

export const update = async ( collection, id, data, userToken) => {
  //volvemos a verificar que no sea una ruta protegida. 
  //esto se deberia simplificar, si lees esto y quieres hacer una pullrequest, mejoramos el codigo juntos.
  if (PROTECTED_COLLECTIONS.includes(collection) && userToken?.role !== 'admin') {
    throw new Error('Acceso denegado a colección protegida');
  }

  await genericModel.updateDocument(collection, id, data);

  //tambien se podrian simplificar las auditorias
  await genericModel.createDocument('auditoria',{
    user: userToken?.user || 'anon',
    action: 'update',
    collection,
    docId: id,
    data,
    timestamp: Date.now()
  });
};

export const remove = async (collection, id, userToken) => {
  if (PROTECTED_COLLECTIONS.includes(collection) && userToken?.role !== 'admin') {
    throw new Error('Acceso denegado a colección protegida');
  }

  await genericModel.deleteDocument(collection, id);

  //otra vez utilizando lo mismo, simplificar!
  await genericModel.createDocument('auditoria', {
    user: userToken?.user || 'anon',
    action: 'delete',
    collection,
    docId: id,
    timestamp: Date.now()
  });
};

//buscar por key
export const search = async (collection, field, value) => {
  return await genericModel.searchByField(collection, field, value);
};
