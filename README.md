<h1>Webpagetest Plugin For Netlify</h1>

 netlify-webpagetest-plugin Allows you to run a Webpagetest test during the deploy process.

# Install

[Please install this plugin using these instructions](https://docs.netlify.com/integrations/build-plugins/create-plugins/#local-plugins)

# Configuration

The following `inputs` options are available.

  - **location**: location to test from)
   

  - **connectivity**: *connectivity profile -- requires location to be specified -- (Cable|DSL|3GSlow|3G|3GFast|4G|LTE|Edge|2G|Dial|FIOS|Native|custom)*

  - **firstViewOnly**: *Skips the Repeat View test if true*
    

  - **runs**: *Number of test runs*

  - **emulateMobile**: *Emulate mobile browser*

  - **block**: *space-delimited list of urls to block (substring match)*

  - **lighthouse**: *Boolean, Perform lighthouse test (Chrome only, Linux agent only)*

  - **throttleCPU**: *Custom Cpu Throttling*

