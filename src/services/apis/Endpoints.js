// For Sample Only

// const baseApi = "http://172.19.140.94:8090/api";

const baseApi = "http://localhost:8090/api";

const mockBaseApi = "https://63e0374da76cfd41058f9f05.mockapi.io/api/v1";

const ownerApi = `${mockBaseApi}/owners`;

export const propertiesApi = `${baseApi}/property`;

export const ownerPropertiesApi = `${baseApi}/owner/property`;

export const mockPropertiesApi = `${mockBaseApi}/properties`;

export const loginApi = `${baseApi}/login`;

export const signupApi = `${baseApi}/login/signup`;

export const usersApi = `${baseApi}/users`;

export const getOwners = ownerApi;

export const getProperties = propertiesApi;

export const userDetailApi = `${baseApi}/users/userDetails`;

export const customerApplicationApi = `${baseApi}/application`;

export const customerFavoriteApi = `${baseApi}/favorite`;

export const getPropertiesOffers = `${baseApi}/owner/application`;

export const updatePropertyApplicationStatus = (offerId, action) =>
  `${baseApi}/application/${offerId}?action=${action}`;

export const deletePropertyById = (propertyId) =>
  `${propertiesApi}/${propertyId}`;

export const getPropertyById = (propertyId) => `${propertiesApi}/${propertyId}`;

export const updatePropertyStatusApi = (propertyId, action) =>
  `${propertiesApi}/${propertyId}?action=${action}`;

export const adminDashboardApi = `${baseApi}/dashboard/admin`;
