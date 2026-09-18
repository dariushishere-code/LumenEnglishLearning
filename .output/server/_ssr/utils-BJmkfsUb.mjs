import { c as hasKeys, i as deepEqual, l as isAbsoluteUrl, s as functionalUpdate, u as isDangerousProtocol } from "./utils-DTBDoUJi.mjs";
import { E as useForwardedRef, b as require_react, c as exactPathTest, i as __toESM, k as useRouter, v as removeTrailingSlash, y as require_jsx_runtime } from "./useStore-ID5WVn9Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-BJmkfsUb.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
require_jsx_runtime();
/**
* Build anchor-like props for declarative navigation and preloading.
*
* Returns stable `href`, event handlers and accessibility props derived from
* router options and active state. Used internally by `Link` and custom links.
*
* Options cover `to`, `params`, `search`, `hash`, `state`, `preload`,
* `activeProps`, `inactiveProps`, and more.
*
* @returns React anchor props suitable for `<a>` or custom components.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLinkPropsHook
*/
function useLinkProps(options, forwardedRef) {
	const router = useRouter();
	const innerRef = useForwardedRef(forwardedRef);
	const { activeProps, inactiveProps, activeOptions, to: toOption, preload: userPreload, preloadDelay: userPreloadDelay, preloadIntentProximity: _preloadIntentProximity, hashScrollIntoView, replace, startTransition, resetScroll, viewTransition, children, target, disabled, style, className, onClick, onBlur, onFocus, onMouseEnter, onMouseLeave, onTouchStart, ignoreBlocker, params: _params, search: _search, hash: _hash, state: _state, mask: _mask, reloadDocument: _reloadDocument, unsafeRelative: _unsafeRelative, from: _from, _fromLocation, ...propsSafeToSpread } = options;
	const to = toOption;
	{
		const safeInternal = isSafeInternal(to);
		if (!safeInternal && isAbsoluteUrl(to)) {
			if (isDangerousProtocol(to, router.protocolAllowlist)) return {
				...propsSafeToSpread,
				ref: innerRef,
				href: void 0,
				...children && { children },
				...target && { target },
				...disabled && { disabled },
				...style && { style },
				...className && { className }
			};
			return {
				...propsSafeToSpread,
				ref: innerRef,
				href: to,
				...children && { children },
				...target && { target },
				...disabled && { disabled },
				...style && { style },
				...className && { className }
			};
		}
		const next = router.buildLocation({
			...options,
			from: options.from
		});
		const hrefOption = getHrefOption(next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref, next.maskedLocation ? next.maskedLocation.external : next.external, router.history, disabled);
		const externalLink = (() => {
			if (hrefOption?.external) {
				if (isDangerousProtocol(hrefOption.href, router.protocolAllowlist)) return;
				return hrefOption.href;
			}
			if (!safeInternal && isAbsoluteUrl(to)) {
				if (isDangerousProtocol(to, router.protocolAllowlist)) return;
				return to;
			}
		})();
		const isActive = (() => {
			if (externalLink) return false;
			const currentLocation = router.stores.location.get();
			const exact = activeOptions?.exact ?? false;
			if (exact) {
				if (!exactPathTest(currentLocation.pathname, next.pathname, router.basepath)) return false;
			} else {
				const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router.basepath);
				const nextPathSplit = removeTrailingSlash(next.pathname, router.basepath);
				if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
			}
			if (activeOptions?.includeSearch ?? true) {
				if (currentLocation.search !== next.search) {
					const currentSearchEmpty = !currentLocation.search || typeof currentLocation.search === "object" && !hasKeys(currentLocation.search);
					const nextSearchEmpty = !next.search || typeof next.search === "object" && !hasKeys(next.search);
					if (!(currentSearchEmpty && nextSearchEmpty)) {
						if (!deepEqual(currentLocation.search, next.search, {
							partial: !exact,
							ignoreUndefined: !activeOptions?.explicitUndefined
						})) return false;
					}
				}
			}
			if (activeOptions?.includeHash) return false;
			return true;
		})();
		if (externalLink) return {
			...propsSafeToSpread,
			ref: innerRef,
			href: externalLink,
			...children && { children },
			...target && { target },
			...disabled && { disabled },
			...style && { style },
			...className && { className }
		};
		const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
		const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
		const resolvedStyle = (() => {
			const baseStyle = style;
			const activeStyle = resolvedActiveProps.style;
			const inactiveStyle = resolvedInactiveProps.style;
			if (!baseStyle && !activeStyle && !inactiveStyle) return;
			if (baseStyle && !activeStyle && !inactiveStyle) return baseStyle;
			if (!baseStyle && activeStyle && !inactiveStyle) return activeStyle;
			if (!baseStyle && !activeStyle && inactiveStyle) return inactiveStyle;
			return {
				...baseStyle,
				...activeStyle,
				...inactiveStyle
			};
		})();
		const resolvedClassName = (() => {
			const baseClassName = className;
			const activeClassName = resolvedActiveProps.className;
			const inactiveClassName = resolvedInactiveProps.className;
			if (!baseClassName && !activeClassName && !inactiveClassName) return "";
			let out = "";
			if (baseClassName) out = baseClassName;
			if (activeClassName) out = out ? `${out} ${activeClassName}` : activeClassName;
			if (inactiveClassName) out = out ? `${out} ${inactiveClassName}` : inactiveClassName;
			return out;
		})();
		return {
			...propsSafeToSpread,
			...resolvedActiveProps,
			...resolvedInactiveProps,
			href: hrefOption?.href,
			ref: innerRef,
			disabled: !!disabled,
			target,
			...resolvedStyle && { style: resolvedStyle },
			...resolvedClassName && { className: resolvedClassName },
			...disabled && STATIC_DISABLED_PROPS,
			...isActive && STATIC_ACTIVE_PROPS
		};
	}
}
var STATIC_EMPTY_OBJECT = {};
var STATIC_ACTIVE_OBJECT = { className: "active" };
var STATIC_DISABLED_PROPS = {
	role: "link",
	"aria-disabled": true
};
var STATIC_ACTIVE_PROPS = {
	"data-status": "active",
	"aria-current": "page"
};
function getHrefOption(publicHref, external, history, disabled) {
	if (disabled) return void 0;
	if (external) return {
		href: publicHref,
		external: true
	};
	return {
		href: history.createHref(publicHref) || "/",
		external: false
	};
}
function isSafeInternal(to) {
	if (typeof to !== "string") return false;
	const zero = to.charCodeAt(0);
	if (zero === 47) return to.charCodeAt(1) !== 47;
	return zero === 46;
}
/**
* A strongly-typed anchor component for declarative navigation.
* Handles path, search, hash and state updates with optional route preloading
* and active-state styling.
*
* Props:
* - `preload`: Controls route preloading (eg. 'intent', 'render', 'viewport', true/false)
* - `preloadDelay`: Delay in ms before preloading on focus, hover, or viewport entry
* - `activeProps`/`inactiveProps`: Additional props merged when link is active/inactive
* - `resetScroll`/`hashScrollIntoView`: Control scroll behavior on navigation
* - `viewTransition`/`startTransition`: Use View Transitions/React transitions for navigation
* - `ignoreBlocker`: Bypass registered blockers
*
* @returns An anchor-like element that navigates without full page reloads.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent
*/
var Link = import_react.forwardRef((props, ref) => {
	const { _asChild, ...rest } = props;
	const { type: _type, ...linkProps } = useLinkProps(rest, ref);
	const children = typeof rest.children === "function" ? rest.children({ isActive: linkProps["data-status"] === "active" }) : rest.children;
	if (!_asChild) {
		const { disabled: _, ...rest } = linkProps;
		return import_react.createElement("a", rest, children);
	}
	return import_react.createElement(_asChild, linkProps, children);
});
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
};
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => (0, import_react.createElement)("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
function todayIso(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function dayOfCycle(date = /* @__PURE__ */ new Date(), length = 1024) {
	const start = Date.UTC(2026, 0, 1);
	const now = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
	return (Math.floor((now - start) / 864e5) % length + length) % length;
}
function slugify(word) {
	return word.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
//#endregion
export { todayIso as a, slugify as i, createLucideIcon as n, dayOfCycle as r, Link as t };
