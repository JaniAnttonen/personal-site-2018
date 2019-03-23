---
path: /blog/winston-loki
date: 2019-03-23T19:57:07.641Z
title: Experiences of Coding an Open Source Winston Transport
---
Lately I've had the time to think about logging in microservices. There seem to be a lot of options, but after looking at them I felt that the open source community around [SRE](https://en.wikipedia.org/wiki/Site_Reliability_Engineering) isn't as mature as I thought it would be. What I mean by this is that the most common options seem to require a lot of configuration and require at least some sort of deep dive into the documentation just to get a simple central point for microservice logs.

Since I already used Winston in my work, it seemed like the best option in terms of ROI for the job, which was gathering logs from around 5 to 10 Node.js Docker containers, and alerting based on that data. (For this, it's good to have some metrics as well.) At first I looked into [winston-elasticsearch](https://www.npmjs.com/package/winston-elasticsearch), since Elasticsearch had a lot of freedom in terms of data analysis, and it seemed like a no-brainer since it came up on every related search.

After trying it for a while it really started to feel a bit too resource-intensive for the job at hand. That's when I remembered bumping into Grafana's Loki on [Github](https://github.com/grafana/loki), and reading a blog post about its no frills approach to logging, which I really liked. Being a Grafana product, the integration with Grafana should be a breeze. Since time wasn't an issue, I decided dipping my toes in making a [custom transport](https://github.com/winstonjs/winston/blob/master/docs/transports.md) for Winston for Loki.

Starting the project I didn't realize how alpha software Loki really was; at the time of my first release, Loki couldn't handle duplicate timestamps. That thing really can be a bummer if you're not putting out timestamps with millisecond precision, and even then, you would be almost guaranteed to run into issues if you had more than one service spewing out logs. I first circumvented the issue in the transport layer itself, but soon realized it was not going to help enough due to what I just mentioned.

Loki is written in Go, so naturally the API is defined in Protobuf, but there's also an option of ingesting JSON. At first I focused on making a simple JSON transport, but after making that work I focused my efforts on making a working Protobuf transport in Node.js and kind of fell in love with it. I tested two options of libraries to working with Protobuf in Node.js, [grpc](https://www.npmjs.com/package/grpc) and [protobufjs](https://www.npmjs.com/package/protobufjs). I ended up using protobufjs since it had a possibility to generate static code based on a protobuf file, so I could use less dependencies in the resulting npm package. Protobuf really felt that it worked better, and I got less errors testing with it than the JSON transport, but I'm still not quite sure if that's down to my or Loki's implementation. It's too bad the Loki API needs the Protobuf messages to be compressed with [snappy](https://github.com/google/snappy), because that meant that you needed to install the snappy binaries on the machine (or container) you would be running winston-loki on.

This is the part where the power of open source software shone through. Shoutout to <https://github.com/avaly>, who pointed out the first issues in the project, with one being the snappy binaries being required for the package to work, even when not using the Protobuf transport. At the time of writing, it is possible to use only the JSON transport and snappy is an optional dependency. Another issue was the transport's batcher not sending remaining logs on process exit.

Perfecting the transport I really started playing with automated tests. Covering lines in coverage reports is a fun game, and pushing towards 100% test coverage you really learn all kinds of tricks with mocking all sorts of stuff from data to functions. Might not be for everyone, but I would recommend it to everyone, because you get an awesome sense of pride that you can show that every line in the code is well thought out and tested.

All in all it has been a great experience in making open source software, which really makes you think about testing, clean code and configurability in a different way.

**By the way, I still ended up using the EFK stack. (Elasticsearch, Fluentd, Kibana)** At this time, Grafana still doesn't support alerting based on Loki data, so you are forced to only exploring it in Grafana at this time. Fluentd was just too great to pass if you're using Docker and microservices written in languages other than Node.js. You can get everything in each container's stdout to Elasticsearch, and can even forward logs between fluentd nodes. It really is great, although a bit frightening at first. I'll keep developing winston-loki, and will keep an eye on Grafana Loki's development. Might even use it in some smaller projects.

_Thanks to everyone who has used the npm package and given support on Github, really appreciate it!_

Repository for the code can be found here: <https://github.com/JaniAnttonen/winston-loki>

NPM package can be found here: <https://www.npmjs.com/package/winston-loki>
