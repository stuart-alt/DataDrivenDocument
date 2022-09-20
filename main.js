import {Scrubber} from "@mbostock/scrubber"
values = Array(3000) [-1.21, -1.02, 0.61, 0.99, -1.53, -0.2, 0.37, 0.22, -2.77, 0.11, 1.12, -2.66, 1.88, -0.7 ]

values = FileAttachment("values@1.json").json()

[d3.min(values)]
