/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'intro',
      },
      items: [
        'introduction/overview',
        'introduction/usecase',
        'introduction/keycomponent',
      ]
    }, 
    'installation',  
    {
      type: 'category',
      label: 'Modules',
      link: {
        type: 'doc',
        id: 'modules',
      },
      items: [
        'module/epoch/epochingmod',
        'module/checkpointing/checkpointingmod',
        'module/btclightclient/lightclient',
        'module/btccheckpoint/btccheckpoint',
        'module/czconcierge/czconcierge',
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      link: {
        type: 'doc',
        id: 'node/nodeoperator',
      },
      items: [
        'node/nodeconfig',
        'setnode',
      ]
    },
    {
      type: 'category',
      label: 'Network Resources',
      link: {
        type: 'doc',
        id: 'resources/resources',
      },
      items: [
        'resources/testnet',
      ]
    },
    'videoguides',
    {
      type:"doc",
      id:"api/grpcrestapi/babylon-grpc-gateway-docs"
    },
    {
      type:"doc",
      id:"api/grpcrestapi/zone-concierge-params",
      label:"Parameters queries the parameters of the module.",
      className:"api-method get"
    },
    //'grpcrestapi',
    // {
    //   type: 'category',
    //   label: 'gRPC Gateway (REST API)',
    //   link: {
    //     type: 'doc',
    //     id: 'grpc/grpcgateway',
    //   },
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'BTC Checkpoint',
    //       link: {
    //         type: 'doc',
    //         id: 'grpc/btccheckpointgrpc',
    //       },
    //       items: [
    //         'grpc/grpcparams',
    //         'grpc/epochnum',
    //         'grpc/submissions',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'BTCLightClient',
    //       link: {
    //         type: 'doc',
    //         id: 'grpc/btclightclient/lightclient1',
    //       },
    //       items: [
    //         'grpc/btclightclient/lightheader',
    //         'grpc/btclightclient/lightcontains',
    //         'grpc/btclightclient/lightcontainsbytes',
    //         'grpc/btclightclient/lighthashes',
    //         'grpc/btclightclient/lightmainchain',
    //         'grpc/btclightclient/lightparams',
    //         'grpc/btclightclient/lighttip',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Epoching',
    //       link: {
    //         type: 'doc',
    //         id: 'grpc/epoching/currentepoch',
    //       },
    //       items: [
    //         'grpc/epoching/currentepoch',
    //         'grpc/epoching/delegationlifecycle',
    //         'grpc/epoching/epoch',
    //         'grpc/epoching/latepochmsgs',
    //         'grpc/epoching/paramsmod',
    //         'grpc/epoching/validatorlifecycle',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Checkpointing',
    //       link: {
    //         type: 'doc',
    //         id: 'grpc/checkpointing/checkpointmod',
    //       },
    //       items: [
    //         'grpc/checkpointing/rawcheckpoint',
    //         'grpc/checkpointing/rawcheckpointliststatus',
    //         'grpc/checkpointing/rawcheckpointlistepochnum',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'ZoneConcierge',
    //       link: {
    //         type: 'doc',
    //         id: 'grpc/concierge/zoneconcierge',
    //       },
    //       items: [
    //         'grpc/concierge/conciergeparams',
    //       ],
    //     },
    //   ],
    // },
    'support',
    {
      type: 'category',
      label: 'CLI Command Docs',
      link: {
        type: 'doc',
        id: 'cli/babylond/cli',
      },
      items: [
        'cli/babylond/babylond',
        'cli/babylond/babylondaddgenesisaccount',
        'cli/babylond/babylondaddgenesisbls',
        'cli/babylond/babylondcollectgentxs',
        'cli/babylond/babylondconfig',
        'cli/babylond/babylondcreatebls',
        'cli/babylond/babylondcreategenesiskey',
        {
          type: 'category',
          label: 'babylon debug',
          link: {
            type: 'doc',
            id: 'cli/babylond/debug/babylonddebug',
          },
          items: [
            'cli/babylond/debug/babylonddebugaddr',
            'cli/babylond/debug/babylonddebugpubkey',
            'cli/babylond/debug/babylonddebugpubkeyraw',
            'cli/babylond/debug/babylonddebugrawbytes',
          ],
        },
        'cli/babylond/babylondexport',
        'cli/babylond/babylondgentx',
        'cli/babylond/babylondhelp',
        'cli/babylond/babylondinit',
        {
          type: 'category',
          label: 'babylon keys',
          link: {
            type: 'doc',
            id: 'cli/babylond/keys/babylondkeys',
          },
          items: [
            'cli/babylond/keys/babylondkeysdd',
            'cli/babylond/keys/babylondkeysdelete',
            'cli/babylond/keys/babylondkeysexport',
            'cli/babylond/keys/babylondkeysimport',
            'cli/babylond/keys/babylondkeyslist',
            'cli/babylond/keys/babylondkeysmigrate',
            'cli/babylond/keys/babylondkeysmnemonic',
            'cli/babylond/keys/babylondkeysparse',
            'cli/babylond/keys/babylondkeysrename',
            'cli/babylond/keys/babylondkeysshow',
          ],
        },
        'cli/babylond/migrate',
        'cli/babylond/preparegenesis',
        {
          type: 'category',
          label: 'babylond query',
          link: {
            type: 'doc',
            id: 'cli/babylond/babylond_query',
          },
          items: [
            'cli/babylond/BabylondQuery/babylond_query_account',
            {
              type: 'category',
              label: 'babylond query auth',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_auth',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_account',
                'cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_accounts',
                'cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_address_by_acc_num',
                'cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account',
                'cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts',
                'cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params',
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query authz',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_authz',
              },
              items: [
                {
                  type: 'category',
                  label: 'babylond query authz grants',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/BabylondQuery/Babylond_query_authz/babylond_query_authz_grants',
                  },
                  items: [
                    'cli/babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/babylond_query_authz_grants_by_grantee',
                    'cli/babylond/BabylondQuery/Babylond_query_authz/Babylond_query_authz_grants/babylond_query_authz_grants_by_granter',
                  ],
                
                },
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query bank',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_bank',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_balances',
                'cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_denom_metadata',
                'cli/babylond/BabylondQuery/Babylond_query_bank/babylond_query_bank_total',
               
              ],
              
            },
            'cli/babylond/BabylondQuery/babylond_query_block', 
            {
              type: 'category',
              label: 'babylond query btccheckpoint',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_btccheckpoint',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_btc-height',
                'cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_epoch_submissions',
                'cli/babylond/BabylondQuery/Babylond_query_btccheckpoint/babylond_query_btccheckpoint_params',
               
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query btclightclient',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_btclightclient',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_base-header',
                'cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_contains',
                'cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_hashes',
                'cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_main-chain',
                'cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_params',
                'cli/babylond/BabylondQuery/Babylond_query_btclightclient/babylond_query_btclightclient_tip',
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query checkpointing',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_checkpointing',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_checkpointing/babylond_query_checkpointing_params',
                {
                  type: 'category',
                  label: 'babylond query checkpointing raw-checkpoint',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/BabylondQuery/Babylond_query_checkpointing/babylond_query_checkpointing_raw_checkpoint',
                  },
                  items: [
                    'cli/babylond/BabylondQuery/Babylond_query_checkpointing/Babylond_query_checkpointing_raw-checkpoint/babylond_query_checkpointing_raw-checkpoint_list',
                   
                  ],
                  
                },
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query distribution',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_distribution',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_commission',
                'cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_community-pool',
                'cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_params',
                'cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_rewards',
                'cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_slashes',
                'cli/babylond/BabylondQuery/Babylond_query_distribution/babylond_query_distribution_validator-outstanding-rewards',
               
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query epoching',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_epoching',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_epoching/babylond_query_epoching_params',
             
               
              ],
              
            },
            'cli/babylond/BabylondQuery/babylond_query_evidence',
            {
              type: 'category',
              label: 'babylond query feegrant',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_freegrant',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grant',
                'cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-grantee',
                'cli/babylond/BabylondQuery/Babylond_query_freegrant/babylond_query_freegrant_grants-by-granter',
             
               
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query gov',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_gov',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposit',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_deposits',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_param',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_params',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposal',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposal',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_proposer',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_tally',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_vote',
                'cli/babylond/BabylondQuery/Babylond_query_gov/babylond_query_gov_votes',
             
               
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query ibc',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/Babylond_query_ibc',
              },
              items: [
                {
                  type: 'category',
                  label: 'babylond query ibc channel',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel',
                  },
                  items: [
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_channels',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_client-state',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_connections',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_end',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_next-sequence-receive',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-ack',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitment',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-commitments',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_packet-receipt',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_unreceived-acks',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_channel/Babylond_query_ibc_channel_unreceived-packets',
                  ],
                  
                },
                {
                  type: 'category',
                  label: 'babylond query ibc client',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client',
                  },
                  items: [
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-state-heights',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_consensus-states',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_header',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_params',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_self-consensus-state',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_state',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_states',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_client/Babylond_query_ibc_client_status',
                  ],
                  
                },
                {
                  type: 'category',
                  label: 'babylond query ibc connection',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection',
                  },
                  items: [
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_connections',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_end',
                    'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_connection/Babylond_query_ibc_connection_path',
                  ],
                  
                },
              ], 
            },
            {
              type: 'category',
              label: 'babylond query ibc-transfer',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-hash',
                'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-trace',
                'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_denom-traces',
                'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_escrow-address',
                'cli/babylond/BabylondQuery/Babylond_query_ibc/Babylond_query_ibc_transfer_params',
              ],
              
            },
            {
              type: 'category',
              label: 'babylond query mint',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_mint',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_mint/babylond_query_mint_annual-provisions',
                'cli/babylond/BabylondQuery/Babylond_query_mint/babylond_query_mint_inflation',
                'cli/babylond/BabylondQuery/Babylond_query_mint/babylond_query_mint_params',
              ]
            },
            {
              type: 'category',
              label: 'babylond query params',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_params',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_params/babylond_query_params_subspace',
              ]
            },
            {
              type: 'category',
              label: 'babylond query slashing',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_slashing',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_params',
                'cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-info',
                'cli/babylond/BabylondQuery/Babylond_query_slashing/babylond_query_slashing_signing-infos',
              ]
            },
            {
              type: 'category',
              label: 'babylond query staking',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_staking',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_delegation',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_delegations',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_delegations-to',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_historical-info',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_params',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_pool',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegations',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_redelegation-from',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegation',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_unbounding-delegations-from',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_validator',
                'cli/babylond/BabylondQuery/Babylond_query_staking/babylond_query_staking_validators',
              ]
            },
            'cli/babylond/BabylondQuery/babylond_query_tendermint-validator-set',
            'cli/babylond/BabylondQuery/babylond_query_tx',
            'cli/babylond/BabylondQuery/babylond_query_txs',
            {
              type: 'category',
              label: 'babylond query upgrade',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_upgrade',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_applied',
                'cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_module_versions',
                'cli/babylond/BabylondQuery/Babylond_query_upgrade/babylond_query_upgrade_plan',
              ]
            },
            {
              type: 'category',
              label: 'babylond query zoneconcierge',
              link: {
                type: 'doc',
                id: 'cli/babylond/BabylondQuery/babylond_query_zoneconcierge',
              },
              items: [
                'cli/babylond/BabylondQuery/Babylond_query_zoneconcierge/babylond_query_zoneconcierge_params',
              ]
            },
          ], 
        },
        'cli/babylond/babylond_rollback',
        'cli/babylond/babylond_rosetta',
        'cli/babylond/babylond_start',
        'cli/babylond/babylond_status',
        {
          type: 'category',
          label: 'babylon tendermint',
          link: {
            type: 'doc',
            id: 'cli/babylond/babylond_tendermint',
          },
          items: [
            'cli/babylond/Babylond_tendermint/babylond_tendermint_reset-state',
            'cli/babylond/Babylond_tendermint/babylond_tendermint_show-address',
            'cli/babylond/Babylond_tendermint/babylond_tendermint_show-node-id',
            'cli/babylond/Babylond_tendermint/babylond_tendermint_show-validator',
            'cli/babylond/Babylond_tendermint/babylond_tendermint_unsafe-reset-all',
            'cli/babylond/Babylond_tendermint/babylond_tendermint_version',
          ],
        },
        'cli/babylond/babylond_testnet',
        {
          type: 'category',
          label: 'babylon tx',
          link: {
            type: 'doc',
            id: 'cli/babylond/babylond_tx',
          },
          items: [
            {
              type: 'category',
              label: 'babylond tx authz',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_authz',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_authz/babylond_tx_authz_exec',
                'cli/babylond/Babylond_tx/Babylond_tx_authz/babylond_tx_authz_grant',
                'cli/babylond/Babylond_tx/Babylond_tx_authz/babylond_tx_authz_revoke',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx bank',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_bank',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_bank/babylond_tx_bank_multi-send',
                'cli/babylond/Babylond_tx/Babylond_tx_bank/babylond_tx_bank_send',
              ]
            },
            'cli/babylond/Babylond_tx/babylond_tx_broadcast',
            'cli/babylond/Babylond_tx/babylond_tx_btccheckpoint',
            {
              type: 'category',
              label: 'babylond tx btclightclient',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_btclightclient',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_btclightclient/babylond_tx_btclightclient_insert-header',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx checkpointing',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_checkpointing',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_create-validator',
                'cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx crisis',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_crisis',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_crisis/babylond_tx_crisis_invariant-broken',
              ]
            },
            'cli/babylond/Babylond_tx/babylond_tx_decode',
            {
              type: 'category',
              label: 'babylond tx distribution',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_distribution',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_fund-community-pool',
                'cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_set-withdraw-addr',
                'cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-rewards',
                'cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-all-rewards',
              ]
            },
            'cli/babylond/Babylond_tx/babylond_tx_encode',
            {
              type: 'category',
              label: 'babylond tx epoching',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_epoching',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_epoching/babylond_tx_epoching_delegate',
                'cli/babylond/Babylond_tx/Babylond_tx_epoching/babylond_tx_epoching_redelegate',
                'cli/babylond/Babylond_tx/Babylond_tx_epoching/babylond_tx_epoching_unbond',
              ]
            },
            'cli/babylond/Babylond_tx/babylond_tx_evidence',
            {
              type: 'category',
              label: 'babylond tx feegrant',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_feegrant',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_grant',
                'cli/babylond/Babylond_tx/Babylond_tx_feegrant/babylond_tx_feegrant_revoke',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx gov',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_gov',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_gov/babylond_tx_gov_deposit',
                'cli/babylond/Babylond_tx/Babylond_tx_gov/babylond_tx_gov_draft-proposal',
                {
                  type: 'category',
                  label: 'babylond tx gov submit-legacy-proposal',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/Babylond_tx/Babylond_tx_gov/babylond_tx_gov_submit-legacy-proposal',
                  },
                  items: [
                    'cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_cancel',
                    'cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_community',
                    'cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_param',
                    'cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_software',
                  ]
                },
                'cli/babylond/Babylond_tx/Babylond_tx_gov/babylond_tx_gov_submit-proposal',
                'cli/babylond/Babylond_tx/Babylond_tx_gov/babylond_tx_gov_vote',
                'cli/babylond/Babylond_tx/Babylond_tx_gov/babylond_tx_gov_weighted-vote',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx ibc',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_ibc',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_ibc/babylond_tx_ibc_channel',
                {
                  type: 'category',
                  label: 'babylond tx ibc client',
                  link: {
                    type: 'doc',
                    id: 'cli/babylond/Babylond_tx/Babylond_tx_ibc/babylond_tx_ibc_client',
                  },
                  items: [
                    'cli/babylond/Babylond_tx/Babylond_tx_ibc/client/babylond_tx_ibc_client_create',
                    'cli/babylond/Babylond_tx/Babylond_tx_ibc/client/babylond_tx_ibc_client_misbehaviour',
                    'cli/babylond/Babylond_tx/Babylond_tx_ibc/client/babylond_tx_ibc_client_update',
                    'cli/babylond/Babylond_tx/Babylond_tx_ibc/client/babylond_tx_ibc_client_upgrade',
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'babylond tx ibc-transfer',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_ibc-transfer',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_ibc-transfer/babylond_tx_ibc-transfer_transfer',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx multi-sign',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_multi-sign',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_multi-sign/babylond_tx_multi-sign-batch',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx sign',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_sign',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_sign/babylond_tx_sign-batch',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx slashing',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_slashing',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_slashing/babylond_tx_slashing_unjail',
              ]
            },
            {
              type: 'category',
              label: 'babylond tx staking',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_staking',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_cancel-unbond',
                'cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_create-validator',
                'cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_delegate',
                'cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_edit-validator',
                'cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_redelegate',
                'cli/babylond/Babylond_tx/Babylond_tx_staking/babylond_tx_staking_unbond',
              ]
            },
            'cli/babylond/Babylond_tx/babylond_tx_validate-signatures',
            {
              type: 'category',
              label: 'babylond tx vesting',
              link: {
                type: 'doc',
                id: 'cli/babylond/Babylond_tx/babylond_tx_vesting',
              },
              items: [
                'cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-periodic-vesting-account',
                'cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-permanent-locked-account',
                'cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-vesting-account',
              ]
            },
            'cli/babylond/Babylond_tx/babylond_tx_zoneconcierge',
          ],
        },
        'cli/babylond/babylond_validate-genesis',
        'cli/babylond/babylond_version',
      ],
    },
  ],
};

module.exports = sidebars;
