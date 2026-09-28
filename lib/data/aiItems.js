// AI directory entries.
// Source: askdroid.com/ai/ — summaries are paraphrased from the original
// listing blurbs; detail copy is original writing expanding on each entry.

export const aiItems = [
  {
    slug: 'skild-brain',
    name: 'Skild Brain',
    featured: true,
    category: 'robot-foundation-models',
    tagline: 'A general-purpose robotics foundation model',
    summary:
      'A robotics foundation model from Skild AI, founded in 2023 by researchers Deepak Pathak and Abhinav Gupta.',
    detail:
      'Skild Brain is built to be a single, shared model that many different robot bodies can run on top of, rather than a bespoke policy trained per-robot. The pitch behind it is scale: pool locomotion and manipulation data across form factors and let the model generalize the way large language models generalize across text. For directory visitors evaluating foundation-model vendors, Skild is a useful reference point for the "one brain, many bodies" school of thought.',
  },
  {
    slug: 'gemini-robotics',
    name: 'Gemini Robotics',
    featured: true,
    category: 'vision-language-action-models',
    tagline: "Google DeepMind's multimodal reasoning, brought into the physical world",
    summary:
      "Brings Gemini's multimodal reasoning into the physical world through two complementary models.",
    detail:
      'Gemini Robotics pairs a vision-language-action model with a separate reasoning model, letting a robot both plan at a high level and execute low-level motor commands from the same multimodal backbone. It is positioned as an extension of the general-purpose Gemini line rather than a standalone robotics product, which is notable for teams already building on Google\'s model family.',
  },
  {
    slug: 'figure-helix',
    name: 'Figure Helix',
    featured: true,
    category: 'vision-language-action-models',
    tagline: "Figure AI's dual-system VLA for humanoid control",
    summary:
      "A generalist vision-language-action model developed by Figure AI to control its humanoid robots, using a decoupled dual-system architecture.",
    detail:
      'Helix splits cognition into a slower "System 2" reasoning path and a fast "System 1" control loop, an architecture choice meant to mirror how humans separate deliberate thought from reflexive motor control. It runs onboard Figure\'s humanoid platform and is one of the more closely watched VLA efforts because it targets a commercial humanoid rather than a research arm.',
  },
  {
    slug: 'nvidia-isaac-gr00t',
    name: 'NVIDIA Isaac GR00T',
    category: 'vision-language-action-models',
    tagline: 'An open VLA family for humanoid robots',
    summary:
      "NVIDIA's open VLA family for humanoid robots, first announced at GTC 2025.",
    detail:
      'GR00T (Generalist Robot 00 Technology) is distributed as an open model family paired with NVIDIA\'s simulation and synthetic-data tooling, so teams can fine-tune on their own hardware without collecting large real-world datasets from scratch. Its openness has made it a common starting point for university labs and smaller humanoid startups.',
  },
  {
    slug: 'octo',
    name: 'Octo',
    category: 'robot-foundation-models',
    tagline: 'A lightweight, open generalist robot policy',
    summary:
      'A transformer-based diffusion policy pre-trained on 800,000 robot episodes from the Open X-Embodiment dataset.',
    detail:
      'Octo is deliberately small and easy to fine-tune, trading raw capability for accessibility. It is one of the most widely cited fully open baselines in the generalist-policy literature, which makes it a common comparison point in academic robotics papers.',
  },
  {
    slug: 'google-rt-2-2',
    name: 'Google RT-2',
    category: 'vision-language-action-models',
    tagline: 'The model that established the VLA concept',
    summary:
      'Published by Google DeepMind in July 2023, widely credited as the first model to establish the vision-language-action concept.',
    detail:
      'RT-2 showed that a vision-language model trained on web-scale image and text data could be fine-tuned to output robot actions directly, inheriting some of the web model\'s semantic reasoning in the process. Much of the VLA research that followed — including several other entries in this directory — traces its lineage back to this paper.',
  },
  {
    slug: 'physical-intelligence-0-5',
    name: 'Physical Intelligence π0.5',
    featured: true,
    category: 'robot-foundation-models',
    tagline: 'A generalization-focused evolution of the π0 recipe',
    summary:
      'Keeps the π0 recipe — a vision-language-model backbone with a flow-matching action expert — but is built around generalization to new environments.',
    detail:
      'Where the original π0 model focused on dexterity within a known setting, π0.5 emphasizes transfer to homes and environments the model was never trained in. Physical Intelligence has published some of the more detailed technical reports in the space, making this entry a good reference for the flow-matching approach to action generation.',
  },
  {
    slug: 'ros-2-humble-iron-jazzy',
    name: 'ROS 2 (Robot Operating System)',
    featured: true,
    category: 'motion-planning-control',
    tagline: 'The open-source middleware most robots are built on',
    summary:
      'An open-source middleware framework for building robot software, maintained by Open Robotics.',
    detail:
      'ROS 2 provides the messaging, driver, and tooling layer that sits underneath most robotics stacks in this directory, from research arms to commercial AMRs. It is not a single "product" so much as the shared plumbing of the industry, which is why it is included here as essential infrastructure rather than a competing model or platform.',
  },
  {
    slug: 'opencv',
    name: 'OpenCV',
    featured: true,
    category: 'vision-perception-ai',
    tagline: "The world's largest open-source computer vision library",
    summary:
      'A foundational dependency in essentially every robotics vision pipeline built over the last two decades.',
    detail:
      'OpenCV predates the current wave of learned perception models but remains embedded everywhere: camera calibration, classical filtering, and pre/post-processing around modern neural pipelines. Almost every hardware and integration vendor listed in this directory depends on it somewhere in their stack.',
  },
  {
    slug: 'meta-aria-research-kit',
    name: 'Meta Aria Research Kit',
    featured: true,
    category: 'teleoperation-data-collection-tools',
    tagline: 'Egocentric multimodal sensing for embodied AI research',
    summary:
      "Meta Reality Labs Research's egocentric multimodal sensing platform, worn like ordinary glasses.",
    detail:
      'Project Aria pairs research glasses with a companion device to capture first-person video, eye tracking, and spatial audio, which researchers use to build the kind of human-motion datasets that feed teleoperation and imitation-learning pipelines. It is a data-collection tool rather than a deployed product, aimed squarely at labs building the next generation of embodied models.',
  },
  {
    slug: 'aloha-mobile-aloha',
    name: 'ALOHA + Mobile ALOHA',
    featured: true,
    category: 'teleoperation-data-collection-tools',
    tagline: 'Low-cost, open-source bimanual teleoperation hardware',
    summary:
      'An open-source data-collection platform for bimanual teleoperation, and its mobile successor.',
    detail:
      'ALOHA (A Low-cost Open-source Hardware system for bimanual teleoperation) became popular because it let academic labs collect the kind of two-arm manipulation demonstrations that were previously only affordable to well-funded industry teams. Mobile ALOHA extends the same rig onto a wheeled base, adding navigation to the manipulation data it captures.',
  },
  {
    slug: 'claude-4-7-opus',
    name: 'Claude Opus 4.6',
    category: 'multimodal-llms-for-embodied-ai',
    tagline: "Anthropic's high-end multimodal reasoning model",
    summary:
      "Anthropic's high-end multimodal large language model in the Claude 4.x family, designed to balance frontier reasoning with practical deployment.",
    detail:
      'Claude Opus 4.6 is not a robotics-specific model, but it appears in embodied-AI stacks as the reasoning and planning layer above a robot\'s low-level controller — interpreting instructions, breaking tasks into steps, and reasoning over multimodal input before handing execution off to a dedicated motor-control model.',
  },
];
