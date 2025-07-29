import React from 'react';

const VisionMissionPurpose = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="text-center group">
            <div className="text-6xl mb-6">🌠</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              A private community of influential wealth creators and investors engaged in transformative dialogue on human well-being, with a shared focus on giving back and investing in the future, and a dedicated effort to include women in the community.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center group">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              We cultivate a world-class intellectual ecosystem to exchange ideas, challenge the status quo, and explore expert insights—shaping the future with clarity, foresight, and collective wisdom.
            </p>
          </div>

          {/* Purpose */}
          <div className="text-center group">
            <div className="text-6xl mb-6">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Purpose</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              An exclusive intellectual community for accomplished individuals seeking a refined space for strategic dialogue, financial empowerment, personal evolution, and meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPurpose;