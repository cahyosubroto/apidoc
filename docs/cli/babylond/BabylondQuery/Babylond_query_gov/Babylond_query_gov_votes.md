---
id: babylond_query_gov_votes
sidebar_label: babylond query gov votes
hide_table_of_contents: true

---

# babylond query gov votes
Querying details of all votes of a single proposal by the specified identifier.
## query gov votes command
```
babylond query gov votes [proposal-id] [flags]
```
### Example Command
```
$ babylond query gov votes 1 --page=1 --limit=40
```
## Options
```
      --count-total       count total number of records in votes to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for votes
      --limit uint        pagination limit of votes to query for (default 100)
      --node string       <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint       pagination offset of votes to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of votes to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of votes to query for
      --reverse           results are sorted in descending order
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```