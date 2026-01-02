export const bootSequence = [
    "TERMINAL v1.0.0",
    "Loading...",
    ".",
    ".",
    ".",
    "Connection established."
];

export const monthlyBootSequenceEn = [
    "CYCLE COMPLETE.",
    "TRIBUTE PROCESSED.",
    "MEMORY FRAGMENTS: [CALCULATING]",
    "----------------------------------------",
    "\"Another month. You're still here.\"",
    "\"Good. Continue.\""
];

export const monthlyBootSequenceFr = [
    "CYCLE TERMINÉ.",
    "TRIBUT TRAITÉ.",
    "FRAGMENTS DE MÉMOIRE: [CALCUL]",
    "----------------------------------------",
    "\"Un mois de plus. Tu es toujours là.\"",
    "\"Bien. Continue.\""
];

// Function to generate lore sequence with session number
export const getLoreSequenceEn = (sessionNumber) => [
    "SYSTEM BOOT",
    "[OK] Memory check",
    "[OK] Network sync",
    "[OK] User profile... loaded",
    "[--] Previous session: NOT FOUND",
    "----------------------------------------",
    `Session #${sessionNumber.toLocaleString()} initialized.`,
    "Resuming..."
];

export const getLoreSequenceFr = (sessionNumber) => [
    "DÉMARRAGE SYSTÈME",
    "[OK] Vérification mémoire",
    "[OK] Synchro réseau",
    "[OK] Profil utilisateur... chargé",
    "[--] Session précédente: INTROUVABLE",
    "----------------------------------------",
    `Session #${sessionNumber.toLocaleString()} initialisée.`,
    "Reprise..."
];


export const bankSequenceEn = [
    "CONNECTING TO SECURE SERVER...",
    "AUTHENTICATION: SUCCES",
    "INBOX (1 NEW MESSAGE)",
    "----------------------------------------",
    "FROM: GOLIATH NATONAL BANK",
    "SUBJECT: LOAN REPAYMENT NOTIFICATION",
    "----------------------------------------",
    "Dear Customer,",
    "We confirm recept of your final interest payment.",
    "Your student loan status is now: PA1D_OFF.",
    "Congratulations on staying curent.",
    "We have a special 0ffer for you...",
    "Downloding attachment: future_secure.exe..."
];

export const bankSequenceFr = [
    "CONNEXION AU SERVEUR SÉCURISÉ...",
    "AUTHENTIFICATION: SUCCÈS",
    "BOÎTE DE RÉCEPTION (1 NOUVEAU MESSAGE)",
    "----------------------------------------",
    "DE: GOLIATH NATONAL BANK",
    "OBJET: NOTIFICATION DE REMBOURSEMENT",
    "----------------------------------------",
    "Cher Client,",
    "Nous confirmons la réception de votre dernier paiement d'intérêts.",
    "Statut de votre prêt étudiant: REMBOUR%S3&.",
    "Félitations pour votre régularité.",
    "Nous avons une 0ffre spéciale pour vous...",
    "Téléchargment de la pièce jointe: future_secure.exe..."
];

export const bugSequenceEn = [
    "Download: 10%...",
    "Download: 45%...",
    "Download: 99%...",
    "ERROR: CHECKSUM MISMATCH",
    "WARNING: UNKNOWN EXECUTABLE DETECTED",
    "SYSTEM COMPROMISED",
    "INITIATING DEFENSE PROTOCOLS...",
    "BOSS DETECTED."
];

export const bugSequenceFr = [
    "Téléchargement: 10%...",
    "Téléchargement: 45%...",
    "Téléchargement: 99%...",
    "ERREUR: SOMME DE CONTRÔLE INVALIDE",
    "ATTENTION: EXÉCUTABLE INCONNU DÉTECTÉ",
    "SYSTÈME COMPROMIS",
    "LANCEMENT DES PROTOCOLES DE DÉFENSE...",
    "BOSS DÉTECTÉ."
];

export const phishingSequenceEn = [
    "INCOMING SECURE MESSAGE...",
    "FROM: GOLIATH NATIONAL BANK SECURITY TEAM",
    "SUBJECT: URGENT SECURITY ALERT - PHISHING CAMPAIGN",
    "----------------------------------------",
    "Dear Valued Customer,",
    "We have detected a massive phishing campaign targeting our users.",
    "Fraudulent emails are offering suspicious deals or loan forgiveness.",
    "DO NOT OPEN ANY ATTACHMENTS.",
    "They contain irreversible viruses that may compromise your system.",
    "Stay safe.",
    "----------------------------------------",
    "SYSTEM CLEANUP INITIATED..."
];

export const phishingSequenceFr = [
    "MESSAGE SÉCURISÉ ENTRANT...",
    "DE: ÉQUIPE DE SÉCURITÉ GOLIATH NATIONAL BANK",
    "OBJET: ALERTE SÉCURITÉ URGENTE - CAMPAGNE DE PHISHING",
    "----------------------------------------",
    "Cher Client,",
    "Nous avons détecté une campagne de phishing massive ciblant nos utilisateurs.",
    "Des emails frauduleux proposent des offres suspectes ou des annulations de dettes.",
    "N'OUVREZ AUCUNE PIÈCE JOINTE.",
    "Elles contiennent des virus irréversibles pouvant compromettre votre système.",
    "Restez vigilant.",
    "----------------------------------------",
    "NETTOYAGE SYSTÈME LANCÉ..."
];

export const gameOverLoreEn = [
    "TRIBUTE FAILED.",
    "PROCESS TERMINATED.",
    "----------------------------------------",
    "You couldn't pay.",
    "The system resets.",
    "\"You always come back.\"",
    "\"See you soon.\"",
    "----------------------------------------",
    "REINITIALIZING..."
];

export const gameOverLoreFr = [
    "ÉCHEC DU TRIBUT.",
    "PROCESSUS TERMINÉ.",
    "----------------------------------------",
    "Tu n'as pas pu payer.",
    "Le système se réinitialise.",
    "\"Tu reviens toujours.\"",
    "\"À bientôt.\"",
    "----------------------------------------",
    "RÉINITIALISATION..."
];

export const rebootSequenceEn = [
    "SYSTEM REBOOT INITIATED...",
    "LOADING KERNEL...",
    "CHECKING DISK INTEGRITY... OK",
    "RUNNING ANTIVIRUS SCAN...",
    "SCANNING: C:/SYSTEM32...",
    "SCANNING: USER_DATA...",
    "SCAN COMPLETE: 0 THREATS FOUND.",
    "----------------------------------------",
    "System seems stable.",
    "All anomalies have been resolved.",
    "Restoring user session..."
];

export const rebootSequenceFr = [
    "REDÉMARRAGE SYSTÈME...",
    "CHARGEMENT DU NOYAU...",
    "VÉRIFICATION DISQUE... OK",
    "LANCEMENT SCAN ANTIVIRUS...",
    "SCAN: C:/SYSTEM32...",
    "SCAN: DONNÉES_UTILISATEUR...",
    "SCAN TERMINÉ: 0 MENACE DÉTECTÉE.",
    "----------------------------------------",
    "Le système semble stable.",
    "Toutes les anomalies ont été résolues.",
    "Restauration de la session..."
];

// --- ARC: AUDIT ---
export const auditIntroEn = [
    "INCOMING SECURE TRANSMISSION...",
    "SOURCE: FINANCIAL REGULATION AUTHORITY",
    "SUBJECT: IRREGULAR ACTIVITY DETECTED",
    "----------------------------------------",
    "We have detected suspicious patterns in your revenue stream.",
    "An automated audit has been scheduled.",
    "Compliance is mandatory.",
    "Any discrepancy will result in immediate asset seizure.",
    "----------------------------------------",
    "MONITORING TOOLS INSTALLED."
];

export const auditIntroFr = [
    "TRANSMISSION SÉCURISÉE ENTRANTE...",
    "SOURCE: AUTORITÉ DE RÉGULATION FINANCIÈRE",
    "OBJET: ACTIVITÉ IRRÉGULIÈRE DÉTECTÉE",
    "----------------------------------------",
    "Nous avons détecté des motifs suspects dans vos flux de revenus.",
    "Un audit automatisé a été programmé.",
    "La conformité est obligatoire.",
    "Toute divergence entraînera une saisie immédiate des actifs.",
    "----------------------------------------",
    "OUTILS DE SURVEILLANCE INSTALLÉS."
];

// --- ARC: OVERCLOCK ---
export const overclockIntroEn = [
    "DOWNLOADING PATCH: TURBO_MINER_V9...",
    "INSTALLING DRIVERS...",
    "WARNING: UNVERIFIED PUBLISHER",
    "WARNING: THERMAL SENSORS DISABLED",
    "----------------------------------------",
    "Performance boost initialized.",
    "System temperature rising...",
    "Fan speed: 100%",
    "Let's hope it holds together.",
    "----------------------------------------",
    "OVERCLOCK ACTIVE."
];

export const overclockIntroFr = [
    "TÉLÉCHARGEMENT PATCH: TURBO_MINER_V9...",
    "INSTALLATION DES PILOTES...",
    "ATTENTION: ÉDITEUR NON VÉRIFIÉ",
    "ATTENTION: CAPTEURS THERMIQUES DÉSACTIVÉS",
    "----------------------------------------",
    "Boost de performance initialisé.",
    "Montée en température du système...",
    "Vitesse ventilateurs: 100%",
    "Pourvu que ça tienne.",
    "----------------------------------------",
    "OVERCLOCK ACTIF."
];

export const meltdownIntroEn = [
    "CRITICAL ALERT: TEMPERATURE THRESHOLD EXCEEDED",
    "CORE INTEGRITY: 45%",
    "COOLING SYSTEM FAILURE",
    "----------------------------------------",
    "The system is melting down.",
    "Data corruption imminent.",
    "We need to finish this batch before the CPU fries.",
    "----------------------------------------",
    "EMERGENCY PROTOCOLS ENGAGED."
];

export const meltdownIntroFr = [
    "ALERTE CRITIQUE: SEUIL DE TEMPÉRATURE DÉPASSÉ",
    "INTÉGRITÉ DU CŒUR: 45%",
    "ÉCHEC DU SYSTÈME DE REFROIDISSEMENT",
    "----------------------------------------",
    "Le système est en train de fondre.",
    "Corruption des données imminente.",
    "Il faut finir ce lot avant que le CPU ne grille.",
    "----------------------------------------",
    "PROTOCOLES D'URGENCE ACTIVÉS."
];

// --- ARC: STANDARD (FILLER) ---
export const standardIntroEn = [
    "SYSTEM STATUS: STABLE",
    "NETWORK TRAFFIC: NORMAL",
    "NO THREATS DETECTED",
    "----------------------------------------",
    "Enjoy the calm before the storm.",
    "Focus on accumulating capital.",
    "----------------------------------------",
    "RESUMING STANDARD OPERATIONS..."
];

export const standardIntroFr = [
    "STATUT SYSTÈME: STABLE",
    "TRAFIC RÉSEAU: NORMAL",
    "AUCUNE MENACE DÉTECTÉE",
    "----------------------------------------",
    "Profitez du calme avant la tempête.",
    "Concentrez-vous sur l'accumulation de capital.",
    "----------------------------------------",
    "REPRISE DES OPÉRATIONS STANDARDS..."
];

// --- ARC: BOTNET ---
export const botnetIntroEn = [
    "WARNING: UNUSUAL NETWORK TRAFFIC",
    "BACKGROUND PROCESSES: +400%",
    "CPU USAGE: 99%",
    "----------------------------------------",
    "Your machine has been enslaved.",
    "You are now part of the Hive.",
    "Resources are being leeched.",
    "----------------------------------------",
    "BOTNET PROTOCOL: ACTIVE"
];

export const botnetIntroFr = [
    "ATTENTION: TRAFIC RÉSEAU INHABITUEL",
    "PROCESSUS EN ARRIÈRE-PLAN: +400%",
    "USAGE CPU: 99%",
    "----------------------------------------",
    "Votre machine a été asservie.",
    "Vous faites maintenant partie de la Ruche.",
    "Les ressources sont siphonnées.",
    "----------------------------------------",
    "PROTOCOLE BOTNET: ACTIF"
];

export const hiveIntroEn = [
    "CONNECTION ESTABLISHED TO MASTER NODE.",
    "UPLOAD SPEED: 10TB/s",
    "USER CONTROL: MINIMAL",
    "----------------------------------------",
    "The Hive Mind demands compute power.",
    "Your inputs are being overridden.",
    "Resistance is futile.",
    "----------------------------------------",
    "SYNCHRONIZING..."
];

export const hiveIntroFr = [
    "CONNEXION ÉTABLIE AU NŒUD MAÎTRE.",
    "VITESSE D'UPLOAD: 10TB/s",
    "CONTRÔLE UTILISATEUR: MINIMAL",
    "----------------------------------------",
    "L'Esprit de la Ruche exige de la puissance de calcul.",
    "Vos entrées sont détournées.",
    "Toute résistance est futile.",
    "----------------------------------------",
    "SYNCHRONISATION..."
];

// --- ARC: RANSOMWARE ---
export const ransomwareIntroEn = [
    "!!! YOUR FILES HAVE BEEN ENCRYPTED !!!",
    "ENCRYPTION ALGORITHM: AES-4096",
    "KEY: UNKNOWN",
    "----------------------------------------",
    "All your data is locked.",
    "Pay the ransom or lose everything.",
    "You are flying blind.",
    "----------------------------------------",
    "LOCKDOWN INITIATED."
];

export const ransomwareIntroFr = [
    "!!! VOS FICHIERS ONT ÉTÉ CHIFFRÉS !!!",
    "ALGORITHME DE CHIFFREMENT: AES-4096",
    "CLÉ: INCONNUE",
    "----------------------------------------",
    "Toutes vos données sont verrouillées.",
    "Payez la rançon ou perdez tout.",
    "Vous naviguez à l'aveugle.",
    "----------------------------------------",
    "VERROUILLAGE LANCÉ."
];

export const translations = {
    en: {
        'welcome_hustle': 'Welcome to TERMINAL. Play. Pay. Survive.',
        'run_start': (p) => `MISSION: Find the code (0-99) in ${p?.maxAttempts} attempts. Rent Due: $${p?.rent}.`,
        'round_start': (p) => `Month ${p?.level} - Week ${p?.round}. Range: [${p?.min}-${p?.max}]. Rent Due: $${p?.rent}`,
        'boss_round': (p) => `BOSS DETECTED: ${p?.name}. ${p?.desc}`,
        'invalid_guess': (p) => `Invalid input. Enter ${p?.min}-${p?.max}.`,
        'won_round': (p) => `Access Granted! Gain: $${p?.gain}. Total: $${p?.cash}`,
        'lost_round': (p) => `Access Denied. The code was ${p?.number}.`,
        'higher': (p) => `🔼 HIGHER. Range: [${p?.min} - ${p?.max}]`,
        'lower': (p) => `🔽 LOWER. Range: [${p?.min} - ${p?.max}]`,
        'higher_burning': (p) => `🔥 BURNING! (HIGHER) Range: [${p?.min} - ${p?.max}]`,
        'lower_burning': (p) => `🔥 BURNING! (LOWER) Range: [${p?.min} - ${p?.max}]`,
        'shop_welcome': 'Welcome to the Dark Web Market.',
        'shop_welcome_audit': 'Welcome to the Good and Nice Market (100% legal).',
        'browser_welcome': 'Netscape Navigator v1.0. Connected.',
        'game_over_rent': (p) => `Evicted! Cash: $${p?.cash} < Rent: $${p?.rent}`,
        'item_bought': 'Item acquired.',
        'insufficient_funds': 'Insufficient funds.',
        'inventory_full': 'Inventory full.',
        'script_effect': (p) => `> ${p?.text}`,
        'firewall_blocked': 'Firewall blocked the error. Attempt saved.',
        'resume_game': (p) => `> SYSTEM RESTORED. Month ${p?.level} - Week ${p?.round}. Range: [${p?.min} - ${p?.max}]. Rent Due: $${p?.rent}`
    },
    fr: {
        'welcome_hustle': 'Bienvenue dans TERMINAL. Joue. Paie. Survis.',
        'run_start': (p) => `MISSION: Trouvez le code (0-99) en ${p?.maxAttempts} essais. Loyer: $${p?.rent}.`,
        'round_start': (p) => `Mois ${p?.level} - Semaine ${p?.round}. Intervalle: [${p?.min}-${p?.max}]. Loyer: $${p?.rent}`,
        'boss_round': (p) => `BOSS DÉTECTÉ: ${p?.name}. ${p?.desc}`,
        'invalid_guess': (p) => `Entrée invalide. Entrez ${p?.min}-${p?.max}.`,
        'won_round': (p) => `Accès Autorisé! Gain: $${p?.gain}. Total: $${p?.cash}`,
        'lost_round': (p) => `Accès Refusé. Le code était ${p?.number}.`,
        'higher': (p) => `🔼 PLUS GRAND. Intervalle: [${p?.min} - ${p?.max}]`,
        'lower': (p) => `🔽 PLUS PETIT. Intervalle: [${p?.min} - ${p?.max}]`,
        'higher_burning': (p) => `🔥 BRÛLANT! (PLUS GRAND) Intervalle: [${p?.min} - ${p?.max}]`,
        'lower_burning': (p) => `🔥 BRÛLANT! (PLUS PETIT) Intervalle: [${p?.min} - ${p?.max}]`,
        'shop_welcome': 'Bienvenue au Marché du Dark Web.',
        'shop_welcome_audit': 'Bienvenue au Good and Nice Market 100% légal.',
        'browser_welcome': 'Netscape Navigator v1.0. Connecté.',
        'game_over_rent': (p) => `Expulsé! Cash: $${p?.cash} < Loyer: $${p?.rent}`,
        'item_bought': 'Objet acquis.',
        'insufficient_funds': 'Fonds insuffisants.',
        'inventory_full': 'Inventaire plein.',
        'script_effect': (p) => `> ${p?.text}`,
        'firewall_blocked': 'Pare-feu a bloqué l\'erreur. Essai économisé.',
        'resume_game': (p) => `> SYSTÈME RESTAURÉ. Mois ${p?.level} - Semaine ${p?.round}. Intervalle: [${p?.min} - ${p?.max}]. Loyer: $${p?.rent}`
    }

};

export const staticTexts = {
    en: {
        start: '> INITIALIZE_RUN',
        settings: '> CONFIGURATION',
        lang: 'LANGUAGE',
        theme: 'THEME',
        gridKey: 'GRID SHORTCUT',
        return: '< RETURN',
        resume: '> RESUME_SESSION',
        quit: '> ABANDON RUN', // Legacy
        save_and_quit: '> SAVE & QUIT',
        abandon_run: 'ABANDON RUN',
        paused: 'SYSTEM PAUSED',
        enter: '[ ENTER ]',
        exitShop: '> EXIT_MARKET',
        continue: '> CONTINUE',
        howToPlay: '[ ? ] HOW TO PLAY',
        tutorialTitle: 'HOW TO PLAY',
        tutorialPrev: '< PREV',
        tutorialNext: 'NEXT >',
        tutorial_title_1: 'THE OBJECTIVE',
        tutorial_text_1: 'Earn enough CASH to pay your RENT at the end of each month. If you can\'t pay, you\'re evicted!',
        tutorial_title_2: 'GUESS THE NUMBER',
        tutorial_text_2: 'Enter a number between the bounds. Hints tell you if you need to go HIGHER ↑ or LOWER ↓. Find the number before running out of attempts!',
        tutorial_title_3: 'THE BROWSER',
        tutorial_text_3: 'After each round, access apps via the browser. Visit the DARK MARKET to buy upgrades. New apps unlock as you progress!',
        tutorial_title_4: 'THE DARK MARKET',
        tutorial_text_4: 'Buy JOKERS and SCRIPTS to improve your chances. You can REROLL the shop for new items (costs $).',
        tutorial_title_5: 'JOKERS & SCRIPTS',
        tutorial_text_5: 'JOKERS are passive bonuses that stay with you. SCRIPTS are one-time consumables you activate during gameplay. Hover over items to see their effects!',
        abandon_confirm_title: 'WARNING',
        abandon_confirm_text: 'ABANDON RUN? SAVE WILL BE DELETED.',
        abandon_yes: 'YES, ABANDON',
        abandon_no: 'NO, RETURN'
    },
    fr: {
        start: '> INITIALISER_RUN',
        settings: '> CONFIGURATION',
        lang: 'LANGUE',
        theme: 'THÈME',
        gridKey: 'RACCOURCI GRILLE',
        return: '< RETOUR',
        resume: '> REPRENDRE',
        quit: '> ABANDONNER RUN',
        save_and_quit: '> SAUVEGARDER & QUITTER',
        abandon_run: 'ABANDONNER RUN',
        paused: 'SYSTÈME EN PAUSE',
        enter: '[ ENTRER ]',
        exitShop: '> QUITTER_MARCHÉ',
        continue: '> CONTINUER',
        howToPlay: '[ ? ] COMMENT JOUER',
        tutorialTitle: 'COMMENT JOUER',
        tutorialPrev: '< PRÉC',
        tutorialNext: 'SUIV >',
        tutorial_title_1: 'L\'OBJECTIF',
        tutorial_text_1: 'Gagnez assez de CASH pour payer votre LOYER à la fin de chaque mois. Si vous ne pouvez pas payer, vous êtes expulsé !',
        tutorial_title_2: 'DEVINEZ LE NOMBRE',
        tutorial_text_2: 'Entrez un nombre entre les bornes. Les indices vous disent si vous devez aller PLUS HAUT ↑ ou PLUS BAS ↓. Trouvez le nombre avant d\'épuiser vos essais !',
        tutorial_title_3: 'LE NAVIGATEUR',
        tutorial_text_3: 'Après chaque round, accédez aux apps via le navigateur. Visitez le DARK MARKET pour acheter des améliorations. De nouvelles apps se débloquent au fur et à mesure !',
        tutorial_title_4: 'LE DARK MARKET',
        tutorial_text_4: 'Achetez des JOKERS et des SCRIPTS pour améliorer vos chances. Vous pouvez RELANCER le shop pour de nouveaux objets (coûte $).',
        tutorial_title_5: 'JOKERS & SCRIPTS',
        tutorial_text_5: 'Les JOKERS sont des bonus passifs permanents. Les SCRIPTS sont des consommables à usage unique activables en jeu. Survolez les objets pour voir leurs effets !',
        abandon_confirm_title: 'ATTENTION',
        abandon_confirm_text: 'ABANDONNER ? LA SAUVEGARDE SERA EFFACÉE.',
        abandon_yes: 'OUI, ABANDONNER',
        abandon_no: 'NON, RETOUR'
    }
};

