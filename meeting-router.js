/**
 * meeting-router.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Auto-generated from the Veesion Routes GSheet.
 * DO NOT EDIT MANUALLY — update the GSheet and re-run the script.
 *
 * Generated: 2026-06-02
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Supported flow key:
 *   "paid-acquisition"  →  Paid Acquisition & Website Forms
 *
 * HubSpot property names expected on the form / contact:
 *   country             →  contact country label (e.g. "France")
 *   zip                 →  postal code
 *   retail_store_type   →  store type picklist label
 *   job_role            →  job role picklist label
 *   number_of_cameras   →  camera range picklist label (e.g. "10-14 cameras")
 *   number_of_stores    →  number of stores (integer)
 *   firstname           →  contact first name  (appended to the meeting URL)
 *   lastname            →  contact last name   (appended to the meeting URL)
 *   email               →  contact email       (appended to the meeting URL)
 *
 * Routes with link = "TBD" are kept in the table for traceability but are
 * skipped at runtime — the router moves on to the next matching route.
 */

(function (global) {
  'use strict';

  // Default DOM container the matched meeting scheduler is embedded into.
  // Override per-call with: initHubSpot('paid-acquisition', { container: '#x' })
  var DEFAULT_CONTAINER = '#veesion-meeting';

  // Element(s) removed from the DOM once a route matches — the HubSpot form
  // frame, so the scheduler replaces the form instead of stacking under it.
  // Override per-call with { removeSelector: '...' }, or disable with
  // { removeSelector: null }. Harmless no-op on pages without this element.
  var DEFAULT_REMOVE_SELECTOR = '.hs-form-frame';

  // ═══════════════════════════════════════════════════════════════════════════
  // ROUTE TABLE  ·  auto-generated — do not edit
  // ═══════════════════════════════════════════════════════════════════════════
  var ROUTES = [

    // ── France ────────────────────────────────────────────────────────────────
    {
      name: 'C-FR-1', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-fr-1',
      countries: ['France'],
      locationType: 'zip_prefix', locationValues: ['75', '92'],
      storeTypes: ['Supermarket', 'Pharmacy'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: ['10-14 cameras', '15 - 34 cameras'],
      minStores: 1
    },
    {
      name: 'C-FR-2', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-fr-2',
      countries: ['France'],
      locationType: 'zip_prefix', locationValues: ['77', '78', '91', '93', '94', '95'],
      storeTypes: ['Supermarket', 'Pharmacy'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: ['10-14 cameras', '15 - 34 cameras'],
      minStores: 1
    },
    {
      // Rest of France + Belgium — excludes all Paris/IDF prefixes
      name: 'C-FR-3', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-fr-3',
      countries: ['France', 'Belgium'],
      locationType: 'zip_prefix_exclude', locationValues: ['75', '77', '78', '91', '92', '93', '94', '95'],
      storeTypes: ['Supermarket', 'Pharmacy', 'Gas station', 'Convenience store'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store owner'],
      cameras: ['10-14 cameras', '15 - 34 cameras'],
      minStores: 1
    },

    // ── Spain ─────────────────────────────────────────────────────────────────
    {
      name: 'C-ES-1', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-es-1',
      countries: ['Spain'],
      locationType: '', locationValues: [],
      storeTypes: ['Supermarket', 'Pharmacy', 'Convenience store', 'Electronics store', 'Hardware Store', 'Gas station'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: ['10-14 cameras', '15 - 34 cameras', '+ 35 cameras'],
      minStores: 1
    },

    // ── Italy ─────────────────────────────────────────────────────────────────
    {
      name: 'C-IT-1', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-it-1',
      countries: ['Italy'],
      locationType: '', locationValues: [],
      storeTypes: ['Supermarket', 'Pharmacy', 'Hardware Store', 'Convenience store', 'Electronics store', 'Gas station'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: [],
      minStores: 1
    },

    // ── Brazil / Portugal ─────────────────────────────────────────────────────
    {
      // ⚠️  Meeting link not yet created — route is skipped at runtime.
      // Update the link value and remove this comment once the link is live.
      name: 'C-BR-1', flow: 'paid-acquisition',
      link: 'TBD',
      countries: ['Portugal', 'Brazil'],
      locationType: '', locationValues: [],
      storeTypes: ['Supermarket', 'Pharmacy', 'Gas station', 'Convenience store', 'Grocery Store (Convenience store)', 'Electronics store', 'Hardware Store', 'Gardening Store'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: ['15 - 34 cameras', '+ 35 cameras'],
      minStores: 1
    },

    // ── United States / Canada ────────────────────────────────────────────────
    // C-US-2 must stay above C-US-1 — 10+ stores prospects are caught here first.
    {
      name: 'C-US-2', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-us-2',
      countries: ['United States', 'Canada'],
      locationType: '', locationValues: [],
      storeTypes: ['Liquor store', 'Convenience store', 'Gas station', 'Grocery Store (Convenience store)', 'Supermarket', 'Pharmacy'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: [],
      minStores: 10
    },
    {
      // Catches US/CA prospects with < 10 stores (C-US-2 already handled 10+)
      name: 'C-US-1', flow: 'paid-acquisition',
      link: 'https://fr.veesion.io/meetings/veesion/c-us-1',
      countries: ['United States', 'Canada'],
      locationType: '', locationValues: [],
      storeTypes: ['Convenience store', 'Gas station', 'Liquor store', 'Supermarket', 'Pharmacy', 'Grocery Store (Convenience store)'],
      jobRoles: ['Je suis propriétaire d\'un magasin', 'Directeur d\'un magasin indépendant', 'Store Owner'],
      cameras: ['10-14 cameras', '15 - 34 cameras'],
      minStores: 1
    }

  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // CORE MATCHING ENGINE
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Find the first matching route for a given prospect and optional flow.
   * Routes with link = "TBD" are skipped even when criteria match.
   *
   * @param {object} prospect - Normalised prospect data
   * @param {string} [flow]   - Flow key to restrict candidates (optional)
   * @returns {object|null}   - Matching route object, or null
   */
  function findRoute(prospect, flow) {
    console.log({prospect});
    var pool = flow
      ? ROUTES.filter(function (r) { return r.flow === flow; })
      : ROUTES;

    for (var i = 0; i < pool.length; i++) {
      var route = pool[i];
      if (!_matches(route, prospect)) continue;

      if (route.link === 'TBD') {
//        console.warn('[MeetingRouter] Route "' + route.name + '" matched but link is TBD — skipping.');
        continue;
      }

      return route;
    }
    return null;
  }

  // Case- and whitespace-insensitive membership test for label lists, so
  // "Store Owner" / "Store owner" / " store owner " all match the same route.
  // Used for free-text picklist labels (countries, store types, job roles,
  // cameras) — NOT for zip prefixes or store counts.
  function _includesLoose(list, value) {
    if (value == null) return false;
    var needle = String(value).trim().toLowerCase();
    return list.some(function (item) {
      return String(item).trim().toLowerCase() === needle;
    });
  }

  function _matches(route, p) {
    // Countries
    if (route.countries.length && !_includesLoose(route.countries, p.country))
      return false;

    // Location
    if (route.locationType === 'zip_prefix' && route.locationValues.length) {
      var zip = String(p.zip || '');
      if (!route.locationValues.some(function (pfx) { return zip.startsWith(pfx); }))
        return false;
    } else if (route.locationType === 'zip_prefix_exclude' && route.locationValues.length) {
      var zip2 = String(p.zip || '');
      if (route.locationValues.some(function (pfx) { return zip2.startsWith(pfx); }))
        return false;
    } else if (route.locationType === 'timezone' && route.locationValues.length) {
      if (p.timezone !== route.locationValues[0]) return false;
    }

    // Store type
    if (route.storeTypes.length && p.storeType &&
        !_includesLoose(route.storeTypes, p.storeType))
      return false;

    // Job role
    if (route.jobRoles.length && p.jobRole &&
        !_includesLoose(route.jobRoles, p.jobRole))
      return false;

    // Cameras — route specifies allowed picklist values; empty prospect value → no match
    if (route.cameras.length) {
      if (!p.cameras || !_includesLoose(route.cameras, p.cameras)) return false;
    }

    // Min stores
    if (route.minStores !== null && (p.stores || 0) < route.minStores)
      return false;

    return true;
  }

  // ── Timezone helper ──────────────────────────────────────────────────────────
  function _getBrowserTimezone() {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { return null; }
  }

  // ── Contact-param helper ──────────────────────────────────────────────────────
  /**
   * Append firstName / lastName / email to a meeting link as query params.
   * Values are URL-encoded (emails contain "@", names may contain spaces/accents).
   * Picks "?" or "&" depending on whether the link already has a query string.
   */
  function _appendContactParams(link, p) {
    var params = [];
    if (p.firstName) params.push('firstName=' + encodeURIComponent(p.firstName));
    if (p.lastName)  params.push('lastName='  + encodeURIComponent(p.lastName));
    if (p.email)     params.push('email='     + encodeURIComponent(p.email));
    if (!params.length) return link;
    var sep = link.indexOf('?') === -1 ? '?' : '&';
    return link + sep + params.join('&');
  }

  // ── Embed helper ──────────────────────────────────────────────────────────────
  /**
   * Render a HubSpot meeting scheduler into a container element instead of
   * redirecting. Uses HubSpot's MeetingsEmbedCode lib for iframe auto-resize.
   * The lib only scans for ".meetings-iframe-container" present when it loads,
   * so we (re)append the script after injecting the container to force a scan.
   */
  function _embed(url, container) {
    var sel = container || DEFAULT_CONTAINER;
    var el = typeof sel === 'string' ? global.document.querySelector(sel) : sel;
    if (!el) {
      console.warn('[MeetingRouter] embed container not found:', sel);
      return;
    }

    el.innerHTML = '';  // clear any previous render

    var div = global.document.createElement('div');
    div.className = 'meetings-iframe-container';
    div.setAttribute('data-src', url + (url.indexOf('?') === -1 ? '?' : '&') + 'embed=true');
    el.appendChild(div);

    var s = global.document.createElement('script');
    s.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    el.appendChild(s);
  }

  /**
   * Remove the HubSpot form frame (or any selector) from the DOM. Called once
   * a route matches so the scheduler replaces the form. Removes ALL matches;
   * silently does nothing when the selector is falsy or matches nothing.
   */
  function _removeElements(selector) {
    if (!selector) return;
    var nodes = global.document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] && nodes[i].parentNode) nodes[i].parentNode.removeChild(nodes[i]);
    }
  }

  /**
   * Shared "what to do on a match" — embeds the scheduler on every provider
   * and removes the form frame from the DOM.
   *
   * @param {object} route    - Matched route
   * @param {object} prospect - Normalised prospect (supplies contact params)
   * @param {object} [options]
   *        options.container      - CSS selector or element to embed into
   *                                 (defaults to DEFAULT_CONTAINER)
   *        options.removeSelector - element(s) to strip from the DOM on match
   *                                 (defaults to DEFAULT_REMOVE_SELECTOR;
   *                                  pass null to keep the form in place)
   */
  function _handleMatch(route, prospect, options) {
    options = options || {};
    var url = _appendContactParams(route.link, prospect);
    _embed(url, options.container);
    _removeElements('removeSelector' in options ? options.removeSelector : DEFAULT_REMOVE_SELECTOR);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // FIELD NORMALISATION
  // ═══════════════════════════════════════════════════════════════════════════

  function _normaliseHubSpot(values) {
    return {
      country:   values['where_from']        || null,
      zip:       values['zip']               || null,
      storeType: values['retail_store_type'] || null,
      jobRole:   values['job_role']          || null,
      cameras:   values['nombre_de_cameras_dans_le_magasin'] || null,
      stores:    parseInt(values['number_of_store_s_'], 10) || 0,
      timezone:  values['hs_timezone']       || _getBrowserTimezone(),
      firstName: values['firstname']         || null,
      lastName:  values['lastname']          || null,
      email:     values['email']             || null
    };
  }

  var TYPEFORM_FIELD_MAP = {
    'country':           'country',
    'zip':               'zip',
    'retail_store_type': 'storeType',
    'job_role':          'jobRole',
    'number_of_cameras': 'cameras',
    'number_of_stores':  'stores',
    'first_name':        'firstName',
    'last_name':         'lastName',
    'email':             'email'
  };

  function _normaliseTypeform(answers) {
    var p = { timezone: _getBrowserTimezone() };
    (answers || []).forEach(function (answer) {
      var key = TYPEFORM_FIELD_MAP[answer.field && answer.field.ref];
      if (!key) return;
      var val = answer.text || answer.email || (answer.choice && answer.choice.label) || answer.number || null;
      if (key === 'stores') val = parseInt(val, 10) || 0;
      p[key] = val;
    });
    return p;
  }


  // ═══════════════════════════════════════════════════════════════════════════
  // ADAPTER — HUBSPOT FORMS V4 (native, non-iframe)
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Usage (place once on any page where a V4 form is embedded):
   *   MeetingRouter.initHubSpot('paid-acquisition', { container: '#veesion-meeting' });
   *
   * V4 native forms emit DOM CustomEvents (not postMessage). Submitted values
   * are read asynchronously from the form instance, and field names arrive
   * prefixed (e.g. "0-1/country"), so the prefix is stripped before the values
   * are passed to the shared _normaliseHubSpot mapping.
   */
  function initHubSpot(flow, options) {
    global.addEventListener('hs-form-event:on-submission:success', function (event) {
      var FormsV4 = global.HubSpotFormsV4 || global.HubspotFormsV4;
      var form = FormsV4 && FormsV4.getFormFromEvent(event);
      if (!form || typeof form.getFormFieldValues !== 'function') {
        console.warn('[MeetingRouter] V4 form instance unavailable.');
        return;
      }

      form.getFormFieldValues().then(function (fields) {
        var values = {};
        (fields || []).forEach(function (f) {
          if (!f || !f.name) return;
          var name = f.name.replace(/^\d+-\d+\//, '');            // strip "0-1/" prefix
          values[name] = Array.isArray(f.value) ? f.value[0] : f.value;
        });

        var prospect = _normaliseHubSpot(values);
//        console.log('[MeetingRouter] values keys:', Object.keys(values), '→ prospect:', prospect);
        var route    = findRoute(prospect, flow);

        if (route) {
//          console.log('[MeetingRouter] Matched:', route.name);
          _handleMatch(route, prospect, options);
        } else {
//          console.warn('[MeetingRouter] No matching route for:', prospect);
        }
      }).catch(function (err) {
//        console.error('[MeetingRouter] Failed to read V4 field values:', err);
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ADAPTER — TYPEFORM
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Usage:
   *   MeetingRouter.initTypeform('paid-acquisition', { container: '#veesion-meeting' });
   */
  function initTypeform(flow, options) {
    global.addEventListener('message', function (event) {
      var data = event.data;
      var isSubmit = data && (data.type === 'form-submit' || data.name === 'submit');
      if (!isSubmit) return;

      var answers = (data.response && data.response.answers)
                 || (data.formResponse && data.formResponse.answers)
                 || [];

      var prospect = _normaliseTypeform(answers);
      var route    = findRoute(prospect, flow);

      if (route) {
//        console.log('[MeetingRouter] Matched:', route.name);
        _handleMatch(route, prospect, options);
      } else {
//        console.warn('[MeetingRouter] No matching route for:', prospect);
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ADAPTER — LOVABLE (React)
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Usage:
   *   const handleSubmit = MeetingRouter.createLovableHandler('paid-acquisition', { container: '#veesion-meeting' });
   *   <form onSubmit={(e) => { e.preventDefault(); handleSubmit(formState); }}>
   *
   * formState keys must match HubSpot property names:
   *   { country, zip, retail_store_type, job_role, number_of_cameras,
   *     number_of_stores, firstname, lastname, email }
   */
  function createLovableHandler(flow, options) {
    return function (formState) {
      var prospect = _normaliseHubSpot(formState);
      var route    = findRoute(prospect, flow);

      if (route) {
//        console.log('[MeetingRouter] Matched:', route.name);
        _handleMatch(route, prospect, options);
      } else {
//        console.warn('[MeetingRouter] No matching route for:', prospect);
      }

      return route;
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CONVENIENCE — RESOLVE + EMBED IN ONE CALL
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * For pages that already hold a prospect (e.g. a post-redirect landing page
   * that read the query string): find the route and embed it. Returns the
   * matched route, or null when nothing matched (so the caller can show a
   * fallback). On this kind of page there's no form to strip, so callers
   * typically pass { removeSelector: null }.
   *
   *   MeetingRouter.route(prospect, 'paid-acquisition', { container: '#meeting-embed' });
   */
  function route(prospect, flow, options) {
    console.log({prospect});
    var matched = findRoute(prospect, flow);
    if (matched) _handleMatch(matched, prospect, options);
    return matched;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════════════════════
    var MeetingRouter = {
    findRoute:            findRoute,
    route:                route,
    initHubSpot:          initHubSpot,
    initTypeform:         initTypeform,
    createLovableHandler: createLovableHandler
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MeetingRouter;
  } else {
    global.MeetingRouter = MeetingRouter;
  }

})(typeof window !== 'undefined' ? window : global);
