const AxiosInstance = () => {
  return (
    <>
      <section>
        <h1 className="text-xl font-bold">
          Axios Instance for REST API consumptions
        </h1>
        <p className="mb-2">("@/pages/AxiosInstance.tsx")</p>
        <ul className="list-decimal space-y-4 pl-6">
          <li>
            <h3>Install Packages</h3>
            <code>npm install axios</code>
          </li>
          <li>
            <h3>Create axios by following singleton pattern</h3>
            <code>
              <pre>
                {`("@/services/ApiService.ts")
                
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

class ApiService {
  private static instance: AxiosInstance;

  private static getInstance(): AxiosInstance {
    if (!ApiService.instance) {
      ApiService.instance = axios.create({
        baseURL: "https://example.com/",
        timeout: 30000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // Request interceptor
      ApiService.instance.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = Bearer token;
        }
        return config;
      });

      // Response interceptor
      ApiService.instance.interceptors.response.use(
        (response) => response,
        (error) => {
          // Handle global errors (e.g., unauthorized, server errors)
          if (error.response?.status === 401) {
            // Handle unauthorized access
            // e.g., redirect to login page or refresh token
            localStorage.removeItem("token");
            window.location.href = "/login";
          }
          return Promise.reject(error);
        },
      );
    }
    return ApiService.instance;
  }

  static async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    const response = await this.getInstance().get<T>(url, config);
    return response;
  }

  static async post<T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    const response = await this.getInstance().post<T>(url, data, config);
    return response;
  }

  static async put<T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.getInstance().put<T>(url, data, config);
    return response.data;
  }

  static async patch<T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.getInstance().patch<T>(url, data, config);
    return response.data;
  }

  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.getInstance().delete<T>(url, config);
    return response.data;
  }
}

export default ApiService;
`}
              </pre>
            </code>
          </li>
          <li>
            <h3>Start Using</h3>
            <code>{`ApiService.get('users')`}</code>
            <code>{`ApiService.post( 'users', { name: "John" }, {headers: {"Content-Type": "multipart/form-data"}});`}</code>
            <code>{`ApiService.post( 'users', { name: "John" }, {headers: {"Content-Type": "multipart/form-data"}});`}</code>
            <code>{`ApiService.delete('users/1');`}</code>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AxiosInstance;
