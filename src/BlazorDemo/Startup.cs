using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;

namespace BlazorDemo
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddScoped((sp) =>
            {
                return new Blazor.Auth0.Shared.Models.ClientSettings()
                {
                    Auth0Domain = "m4cx.eu.auth0.com",
                    Auth0ClientId = "jNAbtdSmdBzS6HRfhpRUjlDHFxs1IbxW",
                   
                };
            });

            services.AddScoped<Blazor.Auth0.ClientSide.Authentication.AuthenticationService>();
            services.AddScoped<AuthenticationStateProvider, Blazor.Auth0.ClientSide.Authentication.AuthenticationStateProvider>();
            services.AddAuthorizationCore();
        }

        public void Configure(IComponentsApplicationBuilder app)
        {
            app.AddComponent<App>("app");
        }
    }
}
