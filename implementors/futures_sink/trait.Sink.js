(function() {var implementors = {};
implementors["actix_codec"] = [{"text":"impl&lt;T, U, I&gt; Sink&lt;I&gt; for <a class=\"struct\" href=\"actix_codec/struct.Framed.html\" title=\"struct actix_codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_codec/trait.AsyncWrite.html\" title=\"trait actix_codec::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_codec/trait.Encoder.html\" title=\"trait actix_codec::Encoder\">Encoder</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"associatedtype\" href=\"actix_codec/trait.Encoder.html#associatedtype.Error\" title=\"type actix_codec::Encoder::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix_codec::framed::Framed"]}];
implementors["local_channel"] = [{"text":"impl&lt;T&gt; Sink&lt;T&gt; for <a class=\"struct\" href=\"local_channel/mpsc/struct.Sender.html\" title=\"struct local_channel::mpsc::Sender\">Sender</a>&lt;T&gt;","synthetic":false,"types":["local_channel::mpsc::Sender"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()