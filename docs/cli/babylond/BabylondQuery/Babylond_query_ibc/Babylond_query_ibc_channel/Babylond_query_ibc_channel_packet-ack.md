---
id: Babylond_query_ibc_channel_packet-ack
sidebar_label: babylond query ibc channel packet-ack
hide_table_of_contents: true

---

# babylond query ibc channel packet-ack
Querying a packet acknowledgment.
## query ibc channel packet-ack command
```
babylond query ibc channel packet-ack [port-id] [channel-id] [sequence] [flags]
```
### Example Command
```
$ babylond query ibc channel packet-ack [port-id] [channel-id] [sequence]
```
## Options
```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for packet-ack
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
      --prove           show proofs for the query results (default true)
```
## Options Inherited from Parent Commands
```
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```