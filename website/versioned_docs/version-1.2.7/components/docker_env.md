Please copy `env.example` to `.env`  
```sh
cp env.example .env 
```

then edit the .env file to set the sensor names
```sh
sflowSensorName="my sflow sensor name"
netflowSensorName="my netflow sensor name"
```
Simply change the names to unique identifiers and you're good to go. (Use quotes if the names have spaces.) 

:::note
These names uniquely identify the source of the data. In elasticsearch, they are saved in the `meta.sensor_id` field and can be used in visualizations. Choose names that are meaningful and unique.
For example, your sensor names might be "RNDNet Sflow" and "RNDNet Netflow" or "rtr.one.rndnet.edu" and "rtr.two.nrdnet.edu". Whatever makes sense in your situation.
:::

 - If you don't set a sensor name, the default docker hostname, which changes each time you run the pipeline, will be used.
 - If you have only one collector, comment out the line for the one you are not using.
 - If you have more than one of the same type of collector, see the "Docker Advanced" documentation.
 - If you're not using a netflow or an sflow collector (you are getting only tstat data), then simply disregard the env settings and don't start up either collector.


Other settings of note in this file includes the following. You will not necessarily need to change these, but be aware.

**rabbit_output_host**: this defines where the final data will land after going through the pipeline.  Use the default `rabbit` for the local rabbitMQ server, running in its docker container. Enter a hostname to send to a remote rabbitMQ server (also the correct username, password, and queue key/name).

The Logstash Aggregation Filter settings are exposed in case you wish to use different values.
(See comments in the \*-aggregation.conf file.) This config stitches together long-lasting flows that are seen in multiple nfcapd files, matching by the 5-tuple (source and destination IPs, ports, and protocol) plus sensor name. 

**Aggregation_maps_path**: the name of the file to which logstash will write in-progress aggregation data when logstash shuts down. When logstash starts up again, it will read this file in and resume aggregating. The filename is configurable for complex situations, but /data/ is required.  

**Inactivity_timeout**: If more than inactivity_timeout seconds have passed between the 'start' of a flow and the 'start'
of the LAST matching flow, OR if no matching flow has coming in for inactivity_timeout seconds
on the clock, assume the flow has ended.

:::note
Nfcapd files are typically written every 5 minutes. Netsage uses an inactivity_timeout = 630 sec = 10.5 min for 5-min files; 960 sec = 16 min for 15-min files.  (For 5-min files, this allows one 5 min gap or period during which the no. of bits transferred don't meet the cutoff)
:::

**max_flow_timeout**: If a long-lasting flow is still aggregating when this timeout is reached, arbitrarily cut it off and start a new flow.  The default is 24 hours.

