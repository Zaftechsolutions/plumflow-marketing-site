export default function Testimonials() {
  return (
    <section className="testi" id="testimonials">
      <div className="wrap" style={{ textAlign: "center" }}>
        <span className="sec-tag">What People Say</span>
        <h2 className="sec-h" style={{ maxWidth: 500, margin: "16px auto 52px" }}>
          Commercial plumbing companies building their pipeline with PlumFlow
        </h2>
        <div className="testi-grid">

          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-q">&ldquo;Before this, I was copying emails into Outlook one by one with no idea what happened after I hit send. Now I can see which contacts opened, who clicked, and who is worth a follow-up call. It changed how I spend my mornings.&rdquo;</p>
            <div className="testi-who">
              <div className="testi-av">Z</div>
              <div>
                <div className="testi-name">Zeeshan Z.</div>
                <div className="testi-role">Outreach Manager, Commercial Plumbing Group</div>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-q">&ldquo;The scoring feature alone was worth it. We were emailing realtors and HR people and wondering why nobody was calling back. PlumFlow filters them out automatically. Every contact we reach now actually manages a building.&rdquo;</p>
            <div className="testi-who">
              <div className="testi-av">M</div>
              <div>
                <div className="testi-name">Marcus R.</div>
                <div className="testi-role">Owner, Commercial Plumbing Co.</div>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="stars">★★★★★</div>
            <p className="testi-q">&ldquo;Running outreach across multiple companies used to mean five different spreadsheets and five different inboxes. Having it all in one place with AI-written emails for each one saves me hours every week.&rdquo;</p>
            <div className="testi-who">
              <div className="testi-av">T</div>
              <div>
                <div className="testi-name">Tyler B.</div>
                <div className="testi-role">VP Operations, Multi-Site Facilities Group</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
