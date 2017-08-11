reduce inputs as $line
  ({};
   $line.machine as $machine
   | $line.domain as $domain
   | .[$machine].total as $total
   | .[$machine].evildoers as $evildoers
   | . + { ($machine): {"total": (1 + $total),
                        "evildoers": ($evildoers | (.[$domain] += 1)) }} )