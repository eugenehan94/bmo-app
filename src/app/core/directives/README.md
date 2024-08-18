Directives can only be in the declaration metadata once in the project and is
only available in the level it is declared. To use directives in deeper routed
components, a shared directives module (directive.module.ts) is created to be
imported in deeper modules for directives to be used.
In the shared directives module NgModule, export and declare the directives.
