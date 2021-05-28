(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(7),a=(n(0),n(192)),s={id:"logstash",title:"Logstash Pipeline",sidebar_label:"Logstash"},r={unversionedId:"pipeline/logstash",id:"version-1.2.9/pipeline/logstash",isDocsHomePage:!1,title:"Logstash Pipeline",description:'The Logstash portion of the Netsage Pipeline reads in flows (normally from a RabbitMQ queue), performs various transformations and adds additional information to them, then sends them to a location specified in the output logstash config.  (In principle, Logstash can run more than one "logstash pipeline" at a time, but that will not be discussed here.)',source:"@site/versioned_docs/version-1.2.9/pipeline/logstash.md",slug:"/pipeline/logstash",permalink:"/netsage-pipeline/docs/1.2.9/pipeline/logstash",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.9/pipeline/logstash.md",version:"1.2.9",sidebar_label:"Logstash",sidebar:"version-1.2.9/Pipeline",previous:{title:"Importer",permalink:"/netsage-pipeline/docs/1.2.9/pipeline/importer"},next:{title:"Elasticsearch",permalink:"/netsage-pipeline/docs/1.2.9/pipeline/elastic"}},l=[{value:"Logstash Sequence",id:"logstash-sequence",children:[{value:"01-input-rabbit.conf",id:"01-input-rabbitconf",children:[]},{value:"10-preliminaries.conf",id:"10-preliminariesconf",children:[]},{value:"15-sensor-specific-changes.conf",id:"15-sensor-specific-changesconf",children:[]},{value:"20-add_id.conf",id:"20-add_idconf",children:[]},{value:"40-aggregation.conf",id:"40-aggregationconf",children:[]},{value:"45-geoip-tagging.conf",id:"45-geoip-taggingconf",children:[]},{value:"50-asn.conf",id:"50-asnconf",children:[]},{value:"53-caida-org.conf",id:"53-caida-orgconf",children:[]},{value:"55-member-orgs.conf",id:"55-member-orgsconf",children:[]},{value:"60-scireg-tagging-fakegeoip.conf",id:"60-scireg-tagging-fakegeoipconf",children:[]},{value:"70-deidentify.conf",id:"70-deidentifyconf",children:[]},{value:"80-privatize.org.conf",id:"80-privatizeorgconf",children:[]},{value:"88-preferred-location-org.conf",id:"88-preferred-location-orgconf",children:[]},{value:"90-additional-fields.conf",id:"90-additional-fieldsconf",children:[]},{value:"95-cleanup.conf",id:"95-cleanupconf",children:[]},{value:"98-post-process.conf",id:"98-post-processconf",children:[]},{value:"99-output-rabbit.conf",id:"99-output-rabbitconf",children:[]},{value:"Final Stage",id:"final-stage",children:[]}]},{value:"Field names",id:"field-names",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'The Logstash portion of the Netsage Pipeline reads in flows (normally from a RabbitMQ queue), performs various transformations and adds additional information to them, then sends them to a location specified in the output logstash config.  (In principle, Logstash can run more than one "logstash pipeline" at a time, but that will not be discussed here.) '),Object(a.b)("p",null,'Logstash config files invoke various logstash "filters". These conf files are located in /etc/logstash/conf.d/. See below for a brief description of what each does and check the files for comments.'),Object(a.b)("p",null,"Notes: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All ","*",".conf files in conf.d/ are executed in alphabetical order, as if they were one huge file. Those ending in .disabled will not be executed (assuming 'path.config: \"/etc/logstash/conf.d/*.conf\"' in /etc/logstash/pipelines.yml)."),Object(a.b)("li",{parentName:"ul"},"If actions in a .conf file are not needed in your particular case, it can be removed or disabled, but check carefully for effects on downstream configs."),Object(a.b)("li",{parentName:"ul"},"MaxMind, CAIDA, and Science Registry Database files required by the geoip and aggregate filters are downloaded from scienceregistry.netsage.global via cron jobs weekly or daily. (MaxMind data can change weekly, CAIDA quarterly, Science Registry information randomly.) ",Object(a.b)("strong",{parentName:"li"},"NOTE that new versions won't be used in the pipeline until logstash is restarted.")," There is a cron file to do this also, though it's not running in Docker deployments. Similarly for other support files, eg, those used in 90-additional-fields.conf."),Object(a.b)("li",{parentName:"ul"},"Lookup tables for 55-member-orgs.conf that we have compiled are available from sciencregistry.grnoc.iu.edu. See the cron files provided. These will not be updated often, so you may run the cron jobs or not. You will need to provide lists for other networks yourself or ask us.")),Object(a.b)("h2",{id:"logstash-sequence"},"Logstash Sequence"),Object(a.b)("h3",{id:"01-input-rabbitconf"},"01-input-rabbit.conf"),Object(a.b)("p",null,'Reads flows from a rabbitmq queue. (The ".disabled" extenstion can be removed from other 01-input configs available in conf.d/ to get flows from other sources.)'),Object(a.b)("h3",{id:"10-preliminariesconf"},"10-preliminaries.conf"),Object(a.b)("p",null,"Drops flows to or from private IP addresses;\nconverts any timestamps in milliseconds to seconds;\ndrops events with timestamps more than a year in the past or (10 sec) in the future;\ndoes some data type conversions;\nadds @ingest_time (this is mainly for developers)."),Object(a.b)("h3",{id:"15-sensor-specific-changesconf"},"15-sensor-specific-changes.conf"),Object(a.b)("p",null,"Makes any changes to fields needed for specific sensors. It currently provides the ability to change the sensor name for flows from a specified sensor which go through a certain interface, and the ability to apply a sampling rate correction manually for named sensors. You may edit the file in a bare-metal installation and specify everything explicitly (upgrades will not overwrite this config) or you may use the environment file specified in the systemd unit file. For Docker installations, use the .env file to specifiy the parameters. By default, this config will do nothing since the flags are set to False by default."),Object(a.b)("h3",{id:"20-add_idconf"},"20-add_id.conf"),Object(a.b)("p",null,"Adds a unique id (evenutally called meta.id) which is a hash of the 5-tuple of the flow (src and dst ips and ports, and protocol) plus the sensor name. This id is used for aggregating (stitching) in the next step. "),Object(a.b)("h3",{id:"40-aggregationconf"},"40-aggregation.conf"),Object(a.b)("p",null,"Stitches together flows from different nfcapd files into longer flows, matching them up by meta.id and using a specified inactivity_timeout to decide when to start a new flow."),Object(a.b)("p",null,"Notes: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"By default, 5-minute nfcapd files are assumed and the inactivity_timeout is set to 10.5 minutes. If more than 10.5 min have passed between the start of the current flow and the start of the last matching one, do not stitch them together."),Object(a.b)("li",{parentName:"ul"},"If your nfcapd files are written every 15 minutes, change the inactivity_timeout to at least 16 minutes."),Object(a.b)("li",{parentName:"ul"},'There is another "timeout" setting which is basically the maximum duration of a stitched flow (default: 24 hr).'),Object(a.b)("li",{parentName:"ul"},'When logstash shuts down, any flows "in the aggregator" will be written out to aggregate_maps_path (default: /tmp/logstash-aggregation-maps). The file is then read back in when logstash is restarted so aggregation can continue. '),Object(a.b)("li",{parentName:"ul"},"Your logstash pipeline can have only 1 worker or aggregation is not going to work! This is set in the logstash config file."),Object(a.b)("li",{parentName:"ul"},"Tstat flows come in already complete, so no aggregation is done on those flows.")),Object(a.b)("h3",{id:"45-geoip-taggingconf"},"45-geoip-tagging.conf"),Object(a.b)("p",null,'Queries the MaxMind GeoLite2-City database by IP to get src and dst Countries, Continents, Latitudes, and Longitudes;\nif the destination IP is in the multicast range, sets the destination Organization, Country, and Continent to "Multicast".'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This product includes GeoLite2 data created by MaxMind, available from ",Object(a.b)("a",{parentName:"em",href:"http://www.maxmind.com"},"www.maxmind.com"),".")),Object(a.b)("h3",{id:"50-asnconf"},"50-asn.conf"),Object(a.b)("p",null,"Normally with sflow and netflow, flows come in with source and destination ASNs.  If there is no ASN in the input event; or the input ASN is 0, 4294967295, or 23456, or it is a private ASN, tries to get an ASN by IP from the MaxMind ASN database.\nSets ASN to -1 if it is unavailable for any reason."),Object(a.b)("h3",{id:"53-caida-orgconf"},"53-caida-org.conf"),Object(a.b)("p",null,"Uses the current source and destination ASNs to get organization names from the prepared CAIDA ASN-to-Organization lookup file."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This product uses a lookup table constructed from the CAIDA AS Organizations Dataset ",Object(a.b)("a",{parentName:"em",href:"http://www.caida.org/data/as-organizations"},"www.caida.org"),".")," "),Object(a.b)("h3",{id:"55-member-orgsconf"},"55-member-orgs.conf"),Object(a.b)("p",null,"Searches any provided lookup tables by IP to obtain member or customer organization names and overwrite the Organization determined previously.\nThis allows entities which don't own their own ASs to be listed as the src or dst Organization."),Object(a.b)("p",null,"Note: These lookup tables are not stored in github, but an example is provided to show the layout and tables we have can be downloaded via a cron job."),Object(a.b)("h3",{id:"60-scireg-tagging-fakegeoipconf"},"60-scireg-tagging-fakegeoip.conf"),Object(a.b)("p",null,"Uses a fake geoip database containing ",Object(a.b)("a",{parentName:"p",href:"http://scienceregistry.grnoc.iu.edu"},"Science Registry")," information to tag the flows with source and destination science disciplines and roles, organizations and locations, etc;\nremoves Registry fields we don't need to save to elasticsearch."),Object(a.b)("p",null,"Notes: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("a",{parentName:"li",href:"https://scienceregistry.netsage.global/rdb/"},"Science Registry"),' stores human-curated information about various "resources". Resources are sources and destinations of flows.'),Object(a.b)("li",{parentName:"ul"},'The Science Registry "fake geoip database" is updated weekly and can be downloaded via wget in a cron job (provided in the installation).')),Object(a.b)("h3",{id:"70-deidentifyconf"},"70-deidentify.conf"),Object(a.b)("p",null,"Replaces the last octet of IPv4 addresses and the last 4 hextets of IPv6 addresses with x's in order to deidentify them."),Object(a.b)("h3",{id:"80-privatizeorgconf"},"80-privatize.org.conf"),Object(a.b)("p",null,'Removes information about Australian organizations (or, with modification, any country that has privacy rules that require us not to identify organizations).\nIf the ASN is one of those listed, completely replaces the IP with x\'s, sets the location to central Autralia, sets all organizations to "AARNet", removes all Projects.'),Object(a.b)("h3",{id:"88-preferred-location-orgconf"},"88-preferred-location-org.conf"),Object(a.b)("p",null,"Copies Science Registry organization and location values, if they exist, to the meta.preferred_organization and meta.preferred_location fields. If there are no Science Registry values, the organizations and locations from the CAIDA and MaxMind lookups, respectively, are saved to those fields."),Object(a.b)("h3",{id:"90-additional-fieldsconf"},"90-additional-fields.conf"),Object(a.b)("p",null,"Sets additional quick and easy fields.  Supporting mapping or ruby files are used - see support/ and ruby/ in conf.d/. Currently we have (for Netsage's use):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"sensor_group  = TACC, AMPATH, etc.  (based on matching sensor names to regexes)"),Object(a.b)("li",{parentName:"ul"},"sensor_type   = Circuit, Archive, Exchange Point, or Regional Network  (based on matching sensor names to regexes)"),Object(a.b)("li",{parentName:"ul"},"country_scope = Domestic, International, or Mixed  (based on src and dst countries and possibly continents, where Domestic = US, Puerto Rico, or Guam)"),Object(a.b)("li",{parentName:"ul"},"is_network_testing = yes, no  (yes if discipline from the science registry is 'CS.Network Testing and Monitoring' or port = 5001, 5101, or 5201)"),Object(a.b)("li",{parentName:"ul"},"es_doc_id = hash of meta.id and the start time of the flow. If this id is used as the document id in elasticsearch, flows that are mistakenly input more than once will update existing documents rather than be added as duplicates. (NOTE: due to how netflow works, use es_doc_id as the ES document id only for sflow!)")),Object(a.b)("h3",{id:"95-cleanupconf"},"95-cleanup.conf"),Object(a.b)("p",null,"Does small misc. tasks at the end like rename, remove, or convert fields"),Object(a.b)("h3",{id:"98-post-processconf"},"98-post-process.conf"),Object(a.b)("p",null,"Adds @exit_time and @processing_time (these are mainly for developers)"),Object(a.b)("h3",{id:"99-output-rabbitconf"},"99-output-rabbit.conf"),Object(a.b)("p",null,'Sends results to a final RabbitMQ queue. (".disabled" can be removed from other output configs to send flows to other places)'),Object(a.b)("h3",{id:"final-stage"},"Final Stage"),Object(a.b)("p",null,"In the GlobalNOC-Netsage case, the output filter writes the flows to a network-specific RabbitMQ queue on another host and the last stage is a separate logstash pipeline on a 3rd host. The latter reads flows from the final queue using a rabbitmq input filter and sends it into elasticsearch using an elasticsearch output filter with a mapping template which sets data types for the fields. "),Object(a.b)("h2",{id:"field-names"},"Field names"),Object(a.b)("p",null,"The fields used/created in Logstash (and saved to Elasticsearch) are listed in the ",Object(a.b)("a",{parentName:"p",href:"elastic"},"Elasticsearch doc"),"."))}d.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},f=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),p=i,h=f["".concat(s,".").concat(p)]||f[p]||u[p]||a;return n?o.a.createElement(h,r(r({ref:t},c),{},{components:n})):o.a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);