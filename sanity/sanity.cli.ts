import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2qaulu36',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: 'ib9a79pvz9fgrcuxg25dp9q8',
  }
})
