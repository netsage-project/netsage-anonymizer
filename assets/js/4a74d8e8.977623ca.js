(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(192)),b={id:"elastic",title:"Elasticsearch",sidebar_label:"Elasticsearch"},i={unversionedId:"pipeline/elastic",id:"version-1.2.10/pipeline/elastic",isDocsHomePage:!1,title:"Elasticsearch",description:"Flow data is ultimately saved to Elasticsearch. Following are the fields that are used/created in Logstash and that you may see returned by an elasticsearch query.",source:"@site/versioned_docs/version-1.2.10/pipeline/elastic_search.md",slug:"/pipeline/elastic",permalink:"/netsage-pipeline/docs/pipeline/elastic",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.10/pipeline/elastic_search.md",version:"1.2.10",sidebar_label:"Elasticsearch",sidebar:"version-1.2.10/Pipeline",previous:{title:"Logstash Pipeline",permalink:"/netsage-pipeline/docs/pipeline/logstash"},next:{title:"Choosing an Installation Procedure",permalink:"/netsage-pipeline/docs/deploy/choose_install"}},c=[{value:"Flow fields",id:"flow-fields",children:[]},{value:"Source Fields (Destination Fields similarly with &quot;dst&quot;)",id:"source-fields-destination-fields-similarly-with-dst",children:[]},{value:"Source Science Registry Fields  (Destination Fields similarly with &quot;dst&quot;)",id:"source-science-registry-fields--destination-fields-similarly-with-dst",children:[]},{value:"Source &quot;Preferred&quot; Fields (Destination Fields similarly with &quot;dst&quot;)",id:"source-preferred-fields-destination-fields-similarly-with-dst",children:[]},{value:"Value Fields",id:"value-fields",children:[]},{value:"Tstat Value Fields",id:"tstat-value-fields",children:[]},{value:"Developer Fields",id:"developer-fields",children:[]},{value:"Elasticsearch Fields",id:"elasticsearch-fields",children:[]}],d={toc:c};function s(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Flow data is ultimately saved to Elasticsearch. Following are the fields that are used/created in Logstash and that you may see returned by an elasticsearch query."),Object(l.b)("h3",{id:"flow-fields"},"Flow fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"start"),Object(l.b)("td",{parentName:"tr",align:null},"Jun 9, 2020 @ 17:39:53.808"),Object(l.b)("td",{parentName:"tr",align:null},"Start time of the flow (first packet seen)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"end"),Object(l.b)("td",{parentName:"tr",align:null},"Jun 9, 2020 @ 17:39:57.699"),Object(l.b)("td",{parentName:"tr",align:null},"End time of the flow   (last packet seen)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.id"),Object(l.b)("td",{parentName:"tr",align:null},"a17c4f05420d7ded9eb151ccd293a633 ff226d1752b24e0f4139a87a8b26d779"),Object(l.b)("td",{parentName:"tr",align:null},"Id of the flow (hash of 5-tuple + Sensor name)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.flow_type"),Object(l.b)("td",{parentName:"tr",align:null},"sflow"),Object(l.b)("td",{parentName:"tr",align:null},"'sflow', 'netflow', or 'tstat'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.protocol"),Object(l.b)("td",{parentName:"tr",align:null},"tcp"),Object(l.b)("td",{parentName:"tr",align:null},"Protocol used")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.sensor_id"),Object(l.b)("td",{parentName:"tr",align:null},"snvl2-pw-sw-1-mgmt-2.cenic.net"),Object(l.b)("td",{parentName:"tr",align:null},"Sensor name (set in importer config, may not always be a hostname)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.sensor_group"),Object(l.b)("td",{parentName:"tr",align:null},"CENIC"),Object(l.b)("td",{parentName:"tr",align:null},"Sensor group, usually the network")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.sensor_type"),Object(l.b)("td",{parentName:"tr",align:null},"Regional Network"),Object(l.b)("td",{parentName:"tr",align:null},"Sensor type ('Circuit', 'Regional Network', etc)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.country_scope"),Object(l.b)("td",{parentName:"tr",align:null},"Domestic"),Object(l.b)("td",{parentName:"tr",align:null},"'Domestic', 'International', or 'Mixed', depending on countries of src and dst")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.is_network_testing"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"'yes' if discipline is 'CS.Network Testing and Monitoring' or port is one used for PerfSonar: 5001, 5101, or 5201")))),Object(l.b)("h3",{id:"source-fields-destination-fields-similarly-with-dst"},'Source Fields (Destination Fields similarly with "dst")'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_ip"),Object(l.b)("td",{parentName:"tr",align:null},"171.64.68.x"),Object(l.b)("td",{parentName:"tr",align:null},"deidentified IP address")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_port"),Object(l.b)("td",{parentName:"tr",align:null},"80"),Object(l.b)("td",{parentName:"tr",align:null},"port used")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_asn"),Object(l.b)("td",{parentName:"tr",align:null},"32"),Object(l.b)("td",{parentName:"tr",align:null},"Source ASN from the flow header or, in some cases, the ANS of the IP from the MaxMind GeoIP ASN database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_organization"),Object(l.b)("td",{parentName:"tr",align:null},"Stanford University"),Object(l.b)("td",{parentName:"tr",align:null},"organization that owns the AS from the CAIDA ASN-Organization database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_location.lat"),Object(l.b)("td",{parentName:"tr",align:null},"37.423"),Object(l.b)("td",{parentName:"tr",align:null},"latitude of the IP from the MaxMind GeoIP City database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_location.lon"),Object(l.b)("td",{parentName:"tr",align:null},"-122.164"),Object(l.b)("td",{parentName:"tr",align:null},"longitude of the IP from the MaxMind GeoIP City database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_country_name"),Object(l.b)("td",{parentName:"tr",align:null},"United States"),Object(l.b)("td",{parentName:"tr",align:null},"country of the IP from the MaxMind GeoIP City database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_continent"),Object(l.b)("td",{parentName:"tr",align:null},"North America"),Object(l.b)("td",{parentName:"tr",align:null},"continent of the IP the MaxMind GeoIP City database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_ifindex"),Object(l.b)("td",{parentName:"tr",align:null},"166"),Object(l.b)("td",{parentName:"tr",align:null},"the index of the interface the flow came into")))),Object(l.b)("h3",{id:"source-science-registry-fields--destination-fields-similarly-with-dst"},'Source Science Registry Fields  (Destination Fields similarly with "dst")'),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"https://scienceregistry.netsage.global/rdb/"},"Science Registry"),' stores human-curated information about various "resources". Resources are sources and destinations of flows.'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.discipline"),Object(l.b)("td",{parentName:"tr",align:null},"MPS.Physics.High Energy"),Object(l.b)("td",{parentName:"tr",align:null},"The science discipline that uses the resource (ie IP). Note that  not the src MAY not have the same discipline as the dst.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.role"),Object(l.b)("td",{parentName:"tr",align:null},"Storage"),Object(l.b)("td",{parentName:"tr",align:null},"Role that the host plays")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.org_name"),Object(l.b)("td",{parentName:"tr",align:null},"Boston University (BU)"),Object(l.b)("td",{parentName:"tr",align:null},"The organization the manages and/or uses the resource, as listed in the Science Registry")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.org_abbr"),Object(l.b)("td",{parentName:"tr",align:null},"Boston U"),Object(l.b)("td",{parentName:"tr",align:null},"A shorter name for the organization. May not be the official abbreviation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.resource"),Object(l.b)("td",{parentName:"tr",align:null},"BU - ATLAS"),Object(l.b)("td",{parentName:"tr",align:null},"Descriptive resource name from SciReg")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.resource_abbr"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Resource abbreviation (if any)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.project_names"),Object(l.b)("td",{parentName:"tr",align:null},"ATLAS"),Object(l.b)("td",{parentName:"tr",align:null},'"Projects" that the resource is part of')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.latitude"),Object(l.b)("td",{parentName:"tr",align:null},"37.4178"),Object(l.b)("td",{parentName:"tr",align:null},"Resource's latitude, as listed in the Science Registry")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.scireg.src.longitude"),Object(l.b)("td",{parentName:"tr",align:null},"-122.178"),Object(l.b)("td",{parentName:"tr",align:null},"Resource's longitude, as listed in the Science Registry")))),Object(l.b)("h3",{id:"source-preferred-fields-destination-fields-similarly-with-dst"},'Source "Preferred" Fields (Destination Fields similarly with "dst")'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_preferred_org"),Object(l.b)("td",{parentName:"tr",align:null},"Stanford University"),Object(l.b)("td",{parentName:"tr",align:null},"If the IP was found in the Science Registry, this is the SciReg organization, otherwise it is the CAIDA organization")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_preferred_location.lat"),Object(l.b)("td",{parentName:"tr",align:null},"37.417800"),Object(l.b)("td",{parentName:"tr",align:null},"Science Registry value if available, otherwise the MaxMind City DB value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta.src_preferred_location.lon"),Object(l.b)("td",{parentName:"tr",align:null},"-122.172000i"),Object(l.b)("td",{parentName:"tr",align:null},"Science Registry value if available, otherwise the MaxMind City DB value")))),Object(l.b)("h3",{id:"value-fields"},"Value Fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.num_bits"),Object(l.b)("td",{parentName:"tr",align:null},"939, 458, 560"),Object(l.b)("td",{parentName:"tr",align:null},"Sum of the number of bits in the (stitched) flow")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.num_packets"),Object(l.b)("td",{parentName:"tr",align:null},"77, 824"),Object(l.b)("td",{parentName:"tr",align:null},"Sum of the number of packets in the (stitched) flows")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.duration"),Object(l.b)("td",{parentName:"tr",align:null},"3.891"),Object(l.b)("td",{parentName:"tr",align:null},"Calculated as end minus start.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.bits_per_second"),Object(l.b)("td",{parentName:"tr",align:null},"241, 443, 988"),Object(l.b)("td",{parentName:"tr",align:null},"Calculated as num_bits divided by duration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.packets_per_second"),Object(l.b)("td",{parentName:"tr",align:null},"20, 001"),Object(l.b)("td",{parentName:"tr",align:null},"Calculated as num_packets divided by duration")))),Object(l.b)("h3",{id:"tstat-value-fields"},"Tstat Value Fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_cwin_max"),Object(l.b)("td",{parentName:"tr",align:null},"1549681")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_cwin_min"),Object(l.b)("td",{parentName:"tr",align:null},"17")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_initial_cwin"),Object(l.b)("td",{parentName:"tr",align:null},"313")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_max_seg_size"),Object(l.b)("td",{parentName:"tr",align:null},"64313")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_min_seg_size"),Object(l.b)("td",{parentName:"tr",align:null},"17")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_mss"),Object(l.b)("td",{parentName:"tr",align:null},"8960")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_out_seq_pkts"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_dup"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_fc"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_fs"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_reor"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_rto"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_unfs"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_unk"),Object(l.b)("td",{parentName:"tr",align:null},"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_pkts_unrto"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_rexmit_bytes"),Object(l.b)("td",{parentName:"tr",align:null},"1678")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_rexmit_pkts"),Object(l.b)("td",{parentName:"tr",align:null},"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_rtt_avg"),Object(l.b)("td",{parentName:"tr",align:null},"0.044")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_rtt_max"),Object(l.b)("td",{parentName:"tr",align:null},"39.527")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_rtt_min"),Object(l.b)("td",{parentName:"tr",align:null},"0.001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_rtt_std"),Object(l.b)("td",{parentName:"tr",align:null},"0.276")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_sack_cnt"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_win_max"),Object(l.b)("td",{parentName:"tr",align:null},"1549681")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_win_min"),Object(l.b)("td",{parentName:"tr",align:null},"17")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"values.tcp_window_scale"),Object(l.b)("td",{parentName:"tr",align:null},"13")))),Object(l.b)("h3",{id:"developer-fields"},"Developer Fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@ingest_time"),Object(l.b)("td",{parentName:"tr",align:null},"Jun 9, 2020 @ 10:03:20.700"),Object(l.b)("td",{parentName:"tr",align:null},"Essentially time the flow went into the logstash pipeline or the time stitching of the flow commenced")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@timestamp"),Object(l.b)("td",{parentName:"tr",align:null},"Jun 9, 2020 @ 18:03:21.703"),Object(l.b)("td",{parentName:"tr",align:null},"The time the flow went into the logstash pipeline for tstat flows, or the time stitching finished and the event was pushed for other flows.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@exit_time"),Object(l.b)("td",{parentName:"tr",align:null},"Jun 9, 2020 @ 18:03:25.369"),Object(l.b)("td",{parentName:"tr",align:null},"The time the flow exited the pipeline")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@processing_time"),Object(l.b)("td",{parentName:"tr",align:null},"688.31"),Object(l.b)("td",{parentName:"tr",align:null},"@exit_time minus @ingest_time. Useful for seeing how long stitching took.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"stitched_flows"),Object(l.b)("td",{parentName:"tr",align:null},"13"),Object(l.b)("td",{parentName:"tr",align:null},"Number of flows that came into logstash that were stitched together to make this final one. 1 if no flows were stitched together. 0 for tstat flows, which are never stitched.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"es_doc_id"),Object(l.b)("td",{parentName:"tr",align:null},"4f46bef884..."),Object(l.b)("td",{parentName:"tr",align:null},"Hash of meta.id and start time. May be used as doc id in ES to prevent duplicates, but see Notes elsewhere.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"tags"),Object(l.b)("td",{parentName:"tr",align:null},"maxmind src asn"),Object(l.b)("td",{parentName:"tr",align:null},"Various info and error messages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"trial"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"Can be set in 40-aggregation.conf if desired")))),Object(l.b)("h3",{id:"elasticsearch-fields"},"Elasticsearch Fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"name"),Object(l.b)("th",{parentName:"tr",align:null},"example"),Object(l.b)("th",{parentName:"tr",align:null},"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_index"),Object(l.b)("td",{parentName:"tr",align:null},"om-ns-netsage-2020.06.14"),Object(l.b)("td",{parentName:"tr",align:null},'name of the index ("database table")')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_type"),Object(l.b)("td",{parentName:"tr",align:null},"_doc"),Object(l.b)("td",{parentName:"tr",align:null},"set by ES")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_id"),Object(l.b)("td",{parentName:"tr",align:null},"HRkcm3IByJ9fEnbnCpaY"),Object(l.b)("td",{parentName:"tr",align:null},"elasticsearch document id. If es_doc_id is provided, that is used.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"_score"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"set by ES query")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@version"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"set by ES")))))}s.isMDXComponent=!0},192:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=r.a.createContext({}),s=function(t){var e=r.a.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},o=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,b=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),p=s(a),o=n,u=p["".concat(b,".").concat(o)]||p[o]||m[o]||l;return a?r.a.createElement(u,i(i({ref:e},d),{},{components:a})):r.a.createElement(u,i({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,b=new Array(l);b[0]=o;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,b[1]=i;for(var d=2;d<l;d++)b[d]=a[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);